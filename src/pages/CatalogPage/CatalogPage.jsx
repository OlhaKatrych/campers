import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers, selectLoading } from "../../redux/campers/selectors";

import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import CampersList from "../../components/CampersList/CampersList";
import VehicleEquipment from "../../components/Vehicle/VehicleEquipment/VehicleEquipment";

function CatalogPage() {
  const isLoading = useSelector(selectLoading);
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div className={css.catalogPageContainer}>
      <div className={css.filterContainer}>
        <SearchBar />
        <p className={css.textFilter}>Filters</p>
        <VehicleEquipment />
      </div>
      {isLoading && <Loader />}
      {campers.length > 0 && <CampersList />}
    </div>
  );
}

export default CatalogPage;
