import "./ProfilePart.css";
import src from "../../../images/Fundraise/ProfileImage.svg";

const ProfilePart = () => {
  return (
    <div className="profile-root">
      {/* <div> */}
      <img src={src} alt="Profile" className="image" />
      {/* </div> */}
      <div className="profile-menu">
        <div className="profile-menu-header">صفحه کاربری</div>
        <div className="profile-menu-item">
          <div className="profile-menu-item-deactive">اطلاعات من</div>
          <div className="profile-menu-item-active">آگهی‌های من</div>
          <div className="profile-menu-item-deactive">پیغام‌ها</div>
          <div className="profile-menu-item-deactive">خروج</div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePart;
