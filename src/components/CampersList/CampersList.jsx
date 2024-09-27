import css from "./CampersList.module.css";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";


export default function CampersList() {
  const campers = useSelector(selectCampers);
  console.log(campers);
  return (
    <ul className={css.listContainer}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.listCamper}></li>
      ))}
    </ul>
  );
}
