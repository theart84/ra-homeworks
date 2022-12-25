import React from 'react';
import SearchContainer from "../SearchContainer/SearchContainer";
import Input from "../SearchInput/Input";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Search = (props) => (
  <SearchContainer className="search-container">
    <Logo className="logo-container" linkClasses="main-logo" href="/"/>
    <Form className="form">
      <Input type="search" className="search-input"/>
      <Button className="btn">Поиск</Button>
    </Form>
  </SearchContainer>
);

export default Search;
