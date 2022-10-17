import { InputContainer } from "./styles";
export default function Input({ value }) {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
}
