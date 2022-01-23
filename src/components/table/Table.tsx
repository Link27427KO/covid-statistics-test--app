import { FC } from 'react'
import { classNames } from 'primereact/utils'

interface ITableProps {
    headerNames: any
    data: any
    onRowClick?: (index: number) => void
}

const Table: FC<ITableProps> = (props: ITableProps) => {
    const { headerNames, onRowClick, data } = props
    return (
        <table className='table'>
            <thead className='table__thead'>
            <tr>
                {Object.keys(headerNames).map((key, index: number) => {
                    return (
                        <td key={index + 'thead'}
                            className={classNames(
                                headerNames[key].name === '№' && index === 0
                                    ? 'table__first-thead-item__number' : index === 0
                                        ? 'table__first-thead-item' : index === Object.keys(headerNames).length - 1
                                            ? 'table__last-thead-item' : 'table__thead-item')}>
                            <p className='table__thead-p'>{headerNames[key].name}</p>
                        </td>
                    )
                })}
            </tr>
            </thead>
            <tbody>
            {
                data && data.map((item: any, index: number) => {
                    return (
                        <tr key={index} className='table__row' onClick={() => {
                            onRowClick && onRowClick(index)
                        }}>
                            {Object.keys(headerNames).map((key, index) => {
                                return (
                                    <td
                                        key={index}
                                        className={
                                            classNames(
                                                headerNames[key].name === '№'
                                                    ? 'table__row__number'
                                                    : 'table__row__col')
                                        }
                                    >
                                        {item[key]}
                                    </td>
                                )
                            })
                            }
                        </tr>
                    )
                })
            }

            </tbody>

        </table>
    )
}
export default Table