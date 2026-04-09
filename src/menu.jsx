
function Menu({canviarTasca}) {
    const menuItems = ["tasca1.1", "tasca1.2", "tasca1.3", "tasca1.4", "tasca2.1", "tasca2.2", "tasca3.1", "tasca4.1", "tasca4.2"]
    function onClickMenuItem(item){
        canviarTasca(item)
    }
    return (
        <div style={{
            position:"fixed",
            top:"35px",
            left: 0,
            width: '100vw'
            
        }}>
            {menuItems.map((item) => {
                return <button key={item} onClick={() => onClickMenuItem(item)}>{item}</button>
            })}
        </div>
    )
}
export default Menu