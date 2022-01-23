import { FC } from 'react'
import { useIsMobileScreen } from '../../helpers/hooks'
import { Sidebar } from 'primereact/sidebar'
import { Dialog } from 'primereact/dialog'
import DialogCovidCard from './DialogCovidCard'
import { useDispatch, useSelector } from 'react-redux'
import {
    countryDialogSelector,
    countryDialogVisibleSelector
} from '../../modules/reducers/covid-statistics/covidSelectors'
import { setCountryDialog, setCountryDialogVisible } from '../../modules/reducers/covid-statistics/covidSlice'


const CovidDialogComponent: FC = () => {
    const dispatch = useDispatch()
    const isMobile = useIsMobileScreen(800)
    const visible = useSelector(countryDialogVisibleSelector)
    const country = useSelector(countryDialogSelector)
    const closeHandler = () => {
        // @ts-ignore
        dispatch(setCountryDialog({}))
        // @ts-ignore
        dispatch(setCountryDialogVisible(false))
    }
    return (
        <>
            {isMobile ?
                <Sidebar
                    onHide={closeHandler}
                    visible={visible}
                    fullScreen
                    closeOnEscape={true}
                    showCloseIcon={false}
                >
                    <DialogCovidCard country={country} closeHandler={closeHandler} />
                </Sidebar> :
                <Dialog
                    className="covid-dialog"
                    visible={visible}
                    onHide={closeHandler}
                    closeOnEscape={true}
                    blockScroll={true}
                    draggable={false}
                    resizable={false}
                    closable={false}
                    footer={<></>}
                >
                    <DialogCovidCard country={country} closeHandler={closeHandler} />
                </Dialog>
            }
        </>
    )
}

export default CovidDialogComponent