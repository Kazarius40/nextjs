import Link from "next/link";
import "./Menu.css";

const Menu = () => {
    return (
        <nav className="menu-container">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/comments">Comments</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Menu;