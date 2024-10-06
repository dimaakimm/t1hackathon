export interface IPossibleFiltes{
    startDate: string | null,
    endDate:string | null,
    // userId: string | null,
    closedPeriod: string | null,
    direction: string | null
}

export interface IFunnelChartData{
    id: string,
    value: number,
    label: string
}

export interface IBarGraphicData{
    date: number,
    value: number,
}

export interface ISummaryChartData{
    direction: string,
    numberAccepted: number,
    medianTerm: number,
}

export interface IBarGraphicVacancyToDate{
    date: number,
    value: number,
    id: string
}

export interface IBarChartRecruiterMedian{
    id: string,
    name: string,
    value: number
}

export interface IMainGraphicData{
    funnelGraphDto: {funnelGraphElements: IFunnelChartData[]},
    barChartRecruiterMedianDto: {barChartRecruiterMedianElementList: IBarChartRecruiterMedian[]},
    summaryChartDto: {summaryChartElements: ISummaryChartData[]},
    barChartVacancyDateDto: {barChartVacancyDateElements: IBarGraphicVacancyToDate[]},
    barChartRecruiterMedian: IBarChartRecruiterMedian
}