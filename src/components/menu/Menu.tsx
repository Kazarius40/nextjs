import Link from "next/link";

const Menu = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Домашня сторінка</Link>
                </li>
                <li>
                    <Link href="/createCar">Створення нового авто</Link>
                </li>
                <li>
                    <Link href="/cars">Відображення списку авто</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;