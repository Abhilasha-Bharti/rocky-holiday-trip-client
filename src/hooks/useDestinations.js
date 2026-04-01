import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations } from "@/redux/slices/destinationSlice";

const useDestinations = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.destinations);

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  return { data, loading };
};

export default useDestinations;