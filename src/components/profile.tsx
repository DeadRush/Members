import dotsIcon from "../assets/icons/dots.svg";
import starIcon from "../assets/icons/star-icon.png";
import mailIcon from "../assets/icons/mail-icon.svg";
import callIcon from "../assets/icons/call-icon.svg";
type Props = {
  imgUrl: string;
  name: string;
  mail: string;
  rating: number;
};

const Profile = ({ imgUrl, name, mail, rating }: Props) => {
  return (
    <>
      <div className="profile">
        <div className="profile__header">
          <img
            src={dotsIcon}
            alt="Dots Icon"
            className="profile__header__img"
          />
        </div>
        <div className="profile__rating">
          <p className="profile__rating__number">{rating}</p>
          <img
            src={starIcon}
            alt="Star Icon"
            className="profile__rating__img"
          />
        </div>
        <div className="profile__info">
          <img
            src={imgUrl}
            alt="Profile Image"
            className="profile__info__img"
          />
          <h2 className="profile__info__name">{name}</h2>
          <p className="profile__info__mail">{mail}</p>
        </div>
        <div className="profile__bottom">
          <div className="profile__bottom__btn">
            <img
              src={mailIcon}
              alt="Mail Icon"
              className="profile__bottom__img"
            />
            <p className="profile__bottom__text">Email</p>
          </div>
          <div className="profile__bottom__btn profile__bottom__btn--call">
            <img
              src={callIcon}
              alt="Phone Icon"
              className="profile__bottom__img"
            />
            <p className="profile__bottom__text">Call</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
