from transformers import T5ForConditionalGeneration, T5Tokenizer
from datetime import datetime
import json
import torch
import fitz
import re


# Функция для суммаризации одного блока текста
def summarize_text(text):
    input_ids = tokenizer(
    [text],
    add_special_tokens=True,
    padding="max_length",
    truncation=True,
    max_length=400,
    return_tensors="pt")["input_ids"].to(device)

    output_ids = model.generate(
    input_ids=input_ids,
    no_repeat_ngram_size=3,
    num_beams=10,
    length_penalty=2,
    early_stopping=True)[0]
    summary = tokenizer.decode(output_ids, skip_special_tokens=True)
    return summary


# Разбиение текста на блоки
def split_text(text, max_length=300):
    sentences = text.split(". ")
    current_chunk = []
    current_length = 0
    chunks = []
    for sentence in sentences:
        length = len(tokenizer.encode(sentence))
        if current_length + length <= max_length:
            current_chunk.append(sentence)
            current_length += length
        else:
            chunks.append(". ".join(current_chunk) + ".")
            current_chunk = [sentence]
            current_length = length

    if current_chunk:
        chunks.append(". ".join(current_chunk) + ".")

    if ((len(tokenizer.encode(chunks[len(chunks) - 1]))) < 100):
        chunks[len(chunks) - 2] += " "
        chunks[len(chunks) - 2] += chunks[len(chunks) - 1]
        chunks.remove(chunks[len(chunks) - 1])
    return chunks

#Функция запуска суммаризации
def summarize_long_text(long_text):
    chunks = split_text(long_text)
    summarized_chunks = [summarize_text(chunk) for chunk in chunks]
    final_summary = "\n".join(summarized_chunks)
    return final_summary


def main():
    model = T5ForConditionalGeneration.from_pretrained('IlyaGusev/rut5_base_sum_gazeta')
    tokenizer = T5Tokenizer.from_pretrained('IlyaGusev/rut5_base_sum_gazeta')
    device = "cuda" if torch.cuda.is_available() else "cpu"
    #загрузка резюме
    CV = "путь до файла pdf"
    #Открываем PDF-файл
    with fitz.open(CV) as doc:
        extracted_text = ''
        # Проходим по каждой странице
        for page in doc:
            # Извлекаем только текст, игнорируя изображения
            extracted_text += page.get_text("text")


    long_resume = extracted_text
    #short_summary - Суммаризация по блокам -> пара предложений описывающие информацию из равнораспределенных частей резюме
    short_summary = summarize_long_text(long_resume)
    #final_summary - Суммаризация суммаризации -> Очень краткий текст, описывающий информацию из резюме
    final_summary = summarize_text(short_summary)

    return final_summary

if __name__ == "__main__":
    main()
    