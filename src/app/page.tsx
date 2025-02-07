import styles from "./page.module.css";
import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {

    const mealsArray = await getMeals();

    return (
        <div className={styles.page}>
            <Form action={saveMeal}>
                <input type="text" name={"title"} placeholder="Name"/>
                <button>send</button>
            </Form>

            <div className={'meals'}>
                {
                    mealsArray.map(meal => (<div key={meal.id}>{meal.title}</div>))
                }

            </div>

        </div>
    );
}
