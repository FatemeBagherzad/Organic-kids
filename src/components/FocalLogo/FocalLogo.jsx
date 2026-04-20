import focalLogo from '../../assets/focal_logo.png';
import './FocalLogo.scss';

function FocalLogo() {
  return (
    <div className="top-focal-logo" aria-hidden="true">
      <img src={focalLogo} alt="" />
    </div>
  );
}

export default FocalLogo;
