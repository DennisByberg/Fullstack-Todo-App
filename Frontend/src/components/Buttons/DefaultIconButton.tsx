import IconButton from '@mui/material/IconButton';

interface IDefaultIconButtonProps {
  ariaLabel: string;
  isDisabled?: boolean;
  color:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  icon: React.ReactNode;
  onClick?: () => void;
}

function DefaultIconButton({
  color,
  ariaLabel,
  isDisabled,
  icon,
  onClick,
}: IDefaultIconButtonProps) {
  return (
    <IconButton
      color={color}
      aria-label={ariaLabel}
      aria-hidden={false}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
}

export default DefaultIconButton;
