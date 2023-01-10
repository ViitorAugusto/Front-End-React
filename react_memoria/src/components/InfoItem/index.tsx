import * as C from "./InfoItem";

type Props = {
  label: string;
  value: string;
};

export const InfoItem = ({ label, value }: Props) => {
  return (
    <C.Container>
      <C.InfoItemLabel>{label}</C.InfoItemLabel>
      <C.InfoItemValue>{value}</C.InfoItemValue>
    </C.Container>
  );
};
