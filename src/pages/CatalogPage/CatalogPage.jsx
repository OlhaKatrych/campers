import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers, selectLoading } from "../../redux/campers/selectors";

import Loader from "../../components/Loader/Loader";
import CampersList from "../../components/CampersList/CampersList";

function CatalogPage() {
  const isLoading = useSelector(selectLoading);
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <Loader />}
      {campers.length > 0 && <CampersList />}
    </div>
  );
}

export default CatalogPage;
