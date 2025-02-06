import styles from "./page.module.css";
import Form from "next/form";
import {saveAction} from "@/server-actions/serverActions";

export default function Home() {
    return (
        <div className={styles.page}>
            <Form action={saveAction}>
                <input type="text" name={"title"} placeholder="Name"/>
                <button>send</button>
            </Form>

        </div>
    );
}
