import { isLoadingStopped } from "../redux-store/features/notification/notificationSlice"
import { isHideNotification } from "../redux-store/features/notification/notificationSlice";
export const hideNotificationBar = (dispatch) => {
    dispatch(isLoadingStopped());
    setTimeout(() => {
      dispatch(isHideNotification());
    }, 2000);
  };