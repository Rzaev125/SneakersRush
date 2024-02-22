function Header(props) {
    return (
        <header className="flex justify-between items-center p-10">
            <div className="flex items-center">
              <img width={40} height={40} src="/img/logo.png" alt="logo" />
              <div>
                <h3 className="uppercase">Fashion Rush</h3>
                <p className="opacity-50">Магазин Лучших кроссовок</p>
              </div>
            </div>

            <ul className="flex items-center">
              <li onClick={props.onClickCart} className="flex mr-4 cursor-pointer">
                <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                <span className="mt-2">1205 руб.</span>
              </li>
              <li>
                <img width={18} height={18} src="/img/user.svg" alt="user" />
              </li>
            </ul>
        </header>
    )
}

export default Header;
