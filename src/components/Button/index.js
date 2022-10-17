import { ButtonContainner } from "./styles";
export default function Button({ label, onClick }) {
  return (
    <>
      <ButtonContainner onClick={onClick}>{label}</ButtonContainner>
    </>
  );
}
