import '../styles/Button.css'


interface ButtonProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

// Primary Button
const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
}: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label}

        {icon ? (
          <span className="material-icons" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-icons" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
}: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label}

        {icon ? (
          <span className="material-icons" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-icons" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutline };
