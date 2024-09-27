import css from "./CampersList.module.css";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import Campers from "../Campers/Campers";

export default function CampersList() {
  const campers = useSelector(selectCampers);
  return (
    <ul className={css.listContainer}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.listCamper}>
          <Campers data={camper} />
        </li>
      ))}
    </ul>
  );
}
