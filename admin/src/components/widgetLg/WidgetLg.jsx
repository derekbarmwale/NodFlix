import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type }>{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tbody>
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://nikolatesla-network.eu/images/uploads/nikola-tesla-hrvatska_600_804_80_s_c1.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgUsername">Boby Terell</span>
                </td>
                <td className="widgetLgDate">5 June 2022</td>
                <td className="widgetLgAmount">$202.99</td>
                <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://nikolatesla-network.eu/images/uploads/nikola-tesla-hrvatska_600_804_80_s_c1.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgUsername">Boby Terell</span>
                </td>
                <td className="widgetLgDate">5 June 2022</td>
                <td className="widgetLgAmount">$202.99</td>
                <td className="widgetLgStatus"><Button type="Declined"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://nikolatesla-network.eu/images/uploads/nikola-tesla-hrvatska_600_804_80_s_c1.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgUsername">Boby Terell</span>
                </td>
                <td className="widgetLgDate">5 June 2022</td>
                <td className="widgetLgAmount">$202.99</td>
                <td className="widgetLgStatus"><Button type="Pending"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://nikolatesla-network.eu/images/uploads/nikola-tesla-hrvatska_600_804_80_s_c1.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgUsername">Boby Terell</span>
                </td>
                <td className="widgetLgDate">5 June 2022</td>
                <td className="widgetLgAmount">$202.99</td>
                <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}
