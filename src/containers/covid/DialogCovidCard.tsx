import { FC } from 'react'
import { ICountryDialog } from '../../modules/reducers/covid-statistics/covidTypes'
import TotalConfirmedIcon from '../../images/TotalConfirmedIcon'
import TotalDeathsIcon from '../../images/TotalDeathsIcon'
import TotalRecoveredIcon from '../../images/TotalRecoveredIcon'
import { Button } from 'primereact/button'

interface IDialogCovidCardProps {
    country: ICountryDialog
    closeHandler: () => void
}

const DialogCovidCard: FC<IDialogCovidCardProps> = (props: IDialogCovidCardProps) => {
    const { country, closeHandler } = props
    return (
        <div className="dialog-covid-card">
            <div className="dialog-covid-card__header"><h1>{country.Country}</h1></div>
            <div className="dialog-covid-card__items" >
                <div className="dialog-covid-card__items__icon">
                    <TotalConfirmedIcon />
                    <div className="dialog-covid-card__items__title">Total Confirmed</div>
                </div>
                <div>{country.TotalConfirmed}</div>
            </div>
            <div className="dialog-covid-card__items">
                <div className="dialog-covid-card__items__icon">
                    <TotalDeathsIcon />
                    <div className="dialog-covid-card__items__title">Total Deaths</div>
                </div>
                <div>{country.TotalDeaths}</div>
            </div>
            <div className="dialog-covid-card__items">
                <div className="dialog-covid-card__items__icon">
                    <TotalRecoveredIcon />
                    <div className="dialog-covid-card__items__title">Total Recovered</div>
                </div>
                <div>{country.TotalRecovered}</div>

            </div>
            <div className="dialog-covid-card__button-block">
            <Button className="dialog-covid-card__button-block__button" onClick={closeHandler} label='Ok' />
            </div>

        </div>
    )
}

export default DialogCovidCard