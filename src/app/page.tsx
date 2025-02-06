import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
    return (
        <div className={styles.page}>
            {/*<form action="/submit">*/}
            {/*  <input type="text" name={'name'}/>*/}
            {/*  <button>submit</button>*/}
            {/*</form>*/}

            <Form action={'/submit'}>
                <input type="text" name={"name"} placeholder="Name"/>
                <button>send</button>
            </Form>

        </div>
    );
}
