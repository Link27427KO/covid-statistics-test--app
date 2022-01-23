export interface ICovid {
    ID: string
    Message: string
    Date: string
    Global: IGlobal
    Countries: ICountry[]
}

export interface IGlobal {
    Date: string
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: 0
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

export interface ICountry {
    Country: string
    CountryCode: string
    Date: string
    ID: string
    NewConfirmed: number
    NewDeaths: string
    NewRecovered: number
    Premium: any
    Slug: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

export interface ICountryDialog {
    Country: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}