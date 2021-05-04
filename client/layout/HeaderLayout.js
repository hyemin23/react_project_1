import React, { useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import {
  BarsOutlined,
  CloseOutlined,
  InstagramOutlined,
  SearchOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/router"
import { isMobile } from "../style/theme"

//children : 레이아웃으로 감싸진 당한 태그들 모두
const HeaderLayout = ({ children }) => {
  const router = useRouter()
  const [navToggleBtn, setNavToggleBtn] = useState(false)

  const [SearchPopOpen, setSearchPopOpen] = useState(false)

  const SearchPopClick = () => {
    setSearchPopOpen((prev) => !prev)
  }
  return (
    <header>
      <HeaderInner router={router}>
        <button
          className="nav___toggle_btn"
          onClick={() => setNavToggleBtn((prev) => !prev)}
        >
          {navToggleBtn ? <CloseOutlined /> : <BarsOutlined />}
        </button>

        <ul className={navToggleBtn ? "open_items" : "close_items"}>
          <li>
            <Link href="/help">
              <a>HELP</a>
            </Link>
          </li>
          <li>
            <Link href="/notice">
              <a>NOTICE</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/category/[id]" as="/category/all">
              <a>SHOP</a>
            </Link>
          </li>
        </ul>

        {/*로고*/}
        {!navToggleBtn ? (
          <Logo>
            <Link href="/">
              <a>POLODINGO</a>
            </Link>
          </Logo>
        ) : (
          ""
        )}

        <ul className={navToggleBtn ? "open_items" : "close_items"}>
          <li>
            <a href="#">
              <SearchOutlined onClick={SearchPopClick} />
            </a>
            {SearchPopOpen && (
              <SearchForm SearchPopOpen={SearchPopOpen}>
                <div className="Search_div">
                  <form>
                    <div>
                      <fieldset>
                        <input className="keyWord" />
                        <button>
                          <strong>SEARCH</strong>
                        </button>
                        <span href="#" onClick={SearchPopClick}>
                          X
                        </span>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </SearchForm>
            )}
          </li>

          <li>
            <Link href="/login">
              <a>LOGIN</a>
            </Link>
          </li>
          <li>
            <Link href="/myshop">
              <a>MYSHOP</a>
            </Link>
          </li>
          <li>
            <Link href="/review">
              <a>REVIEW</a>
            </Link>
          </li>
          <li>
            <a href="#">
              <InstagramOutlined />
            </a>
          </li>
        </ul>
      </HeaderInner>
    </header>
  )
}

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  paddding: 2rem 3rem;
  width: 100%;
  position: fixed;
  z-index: 2;

  .nav___toggle_btn {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    font-size: 30px;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  }

  li {
    padding: 0 1rem;
  }

  a {
    color: ${(props) =>
      props.router.pathname === "/"
        ? `${props.theme.palette.$whitecolor}`
        : `${props.theme.palette.$darkcolor}`} !important;
    font-size: 16px;
    font-weight: 400;
  }
  a:visited {
    color: transparent;
  }

  ${isMobile} {
    padding: 0.75rem 2rem;
    display: block;
    background-color: ${(props) => props.theme.palette.$darkcolor};
    width: 100%;

    a {
      color: ${(props) => props.theme.palette.$whitecolor} !important;
    }

    .nav___toggle_btn {
      display: block;
    }

    ul {
      margin: auto;
      display: block;
      text-align: center;
      display: none;
    }

    .open_items {
      display: block;
    }
  }
`

const Logo = styled.div`
    display : flex;
    padding : 0.2rem 2rem;
    
    a{
        font-family: 'Cinzel', serif;
        font-size : 2rem;
    }

    ${isMobile}{

        a{
            font-size : 1.5rem;
            display : block;
        }

          .open_items{
            display;
        }

    }

`
const SearchForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  z-index: -1;
  padding: 10rem 0;
  text-align: center;
  box-shadow: 0 15px 15px 1px rgb(0 0 0 /30%);

  input {
    font-size: 1rem;
    outlinle: 0;
    border-width: 0 0 2px;
    heigth: 2rem;
    width: 800px;
    margin-right: 1rem;
  }

  fieldset {
    border: none;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2rem;
    border: none;
  }

  a {
    padding: 0 10px;
    color: black !important;
  }
  span {
    font-size: 20px !important;
    padding: 0 10px;
  }

  ${isMobile} {
    z-index: 2;
    width: 100%;

    input {
      border-width: 0 0 2px;
      width: 50%;
      margin: 0;
    }

    button {
      margin-left: 10px;
    }
  }
`

export default HeaderLayout
