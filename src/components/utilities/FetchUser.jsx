import React, { useState, useEffect } from "react";
import apiEndPoints from "../../apiEndPoints";
import { useNavigate } from "react-router-dom";
import withAxios from "../../HOC/withAxios";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loggedIn, gotUser } from "../../store/slices/userSlice";
import DesktopLoader from "./DesktopLoader";

const FetchUser = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// const successResponse = res.data;

		setTimeout(() => {
			const fakeUser = {
				account: {
					uuid: "1303r0r03e20e2",
				},
				email: "saintzion777@gmal.com",
				system_refer: "system_refer",
			};

			dispatch(gotUser(fakeUser));
			dispatch(loggedIn(true));
		}, 3000);

		// props.authAxios({...apiEndPoints.auth.getUserDetails})
		// .then(res => {
		//     const successResponse = res.data;

		//     dispatch(loggedIn(true));
		//     dispatch(gotUser(successResponse));
		// })
		// .catch(error => {
		//     dispatch(loggedIn(false));
		// })
	}, []);

	return <DesktopLoader />;
};

export default withAxios(FetchUser);
