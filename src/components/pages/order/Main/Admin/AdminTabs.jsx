import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";
import { theme } from "../../../../theme";
export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <RxChevronDown /> : <RxChevronUp />}
        onClick={handleClick}
        className={isCollapsed ? "" : "is-active"}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
