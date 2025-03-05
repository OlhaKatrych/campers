import css from "./VehicleEquipment.module.css";
import { icons as sprite } from "../../../shared/icons/index";

function VehicleEquipment() {
  return (
    <div className={css.vehicleEquipmentWrapper}>
      <h3 className={css.titleLevelThree}>Vehicle equipment</h3>
      <hr />
      <ul className={css.listContainer}>
        <li className={css.listFilter}>
          <button className={css.buttonFilter}>
            <div className={css.iconTextWrapper}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#wind`}></use>
              </svg>
              <span>AC</span>
            </div>
          </button>
        </li>
        <li className={css.listFilter}>
          <button className={css.buttonFilter}>
            <div className={css.iconTextWrapper}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#diagram`}></use>
              </svg>
              <span>Automatic</span>
            </div>
          </button>
        </li>
        <li className={css.listFilter}>
          <button className={css.buttonFilter}>
            <div className={css.iconTextWrapper}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#cup`}></use>
              </svg>
              <span>Kitchen</span>
            </div>
          </button>
        </li>
        <li className={css.listFilter}>
          <button className={css.buttonFilter}>
            <div className={css.iconTextWrapper}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#tv`}></use>
              </svg>
              <span>TV</span>
            </div>
          </button>
        </li>
        <li className={css.listFilter}>
          <button className={css.buttonFilter}>
            <div className={css.iconTextWrapper}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#droplet`}></use>
              </svg>
              <span>Bathroom</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default VehicleEquipment;
