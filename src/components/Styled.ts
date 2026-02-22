import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Card = styled.div<{
  bg: string;
  textColor: string;
  radius: number;
  shadow: boolean;
}>`
  width: 300px;
  padding: 36px 28px 28px;
  text-align: center;
  background: ${({ bg }) => bg};
  color: ${({ textColor }) => textColor};
  border-radius: ${({ radius }) => radius}px;
  animation: ${fadeUp} 0.45s ease both;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  ${({ shadow }) =>
    shadow &&
    `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);`}

  &:hover {
    transform: translateY(-4px);
    ${({ shadow }) =>
      shadow &&
      `box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08);`}
  }

  h2 {
    margin: 10px 0 0;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.3px;
    font-family: "Georgia", serif;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    opacity: 0.6;
    font-family: "Georgia", serif;
    font-style: italic;
    letter-spacing: 0.2px;
  }
`;

export const Avatar = styled.div<{ shape: string; image: string }>`
  width: 96px;
  height: 96px;
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "18px")};
  background: url(${(props) => props.image}) center / cover;
  border: 3px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 9px 22px;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  color: #222;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.2px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f4f0;
`;
