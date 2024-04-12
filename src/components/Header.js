import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import saveWhite from "../assets/saveWhite.svg";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [burger, setBurger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { user, save } = useSelector((s) => s);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scrollPopular() {
    if (windowWidth > 800) {
      window.scroll(0, 3000);
    } else if (windowWidth <= 800 && windowWidth > 700) {
      window.scroll(0, 3100);
    } else if (windowWidth <= 700 && windowWidth > 600) {
      window.scroll(0, 3650);
    } else if (windowWidth <= 600) {
      window.scroll(0, 4730);
    } else {
      window.scroll(0, 2700);
    }
  }

  return (
    <header
      className={`transition-colors w-full duration-200 ${
        scrolled
          ? "bg-[#ffffff] backdrop-blur-sm fixed top-0 z-50"
          : "bg-transparent absolute z-50"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-[100px] max-[720px]:h-[80px]">
          <img
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                window.scroll(0, 0);
              }, 100);
            }}
            className="max-[640px]:w-[190px]"
            src={logo}
            alt="logo"
          />
          <nav className="flex items-center list-none gap-12">
            <li
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scroll(0, 1350);
                }, 200);
              }}
              className="text-[20px] text-[#FF9A31] cursor-pointer max-[1025px]:hidden"
            >
              Категории
            </li>
            <li
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scroll(0, 2700);
                }, 100);
                setBurger(false);
              }}
              className="text-[20px] text-[#FF9A31] cursor-pointer max-[1025px]:hidden"
            >
              Популярные
            </li>
            <li
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scroll(0, 730);
                }, 100);
                setBurger(false);
              }}
              className="text-[20px] text-[#FF9A31] cursor-pointer max-[1025px]:hidden"
            >
              Добавить рецепт
            </li>
          </nav>
          <div className="flex gap-4 items-center">
            {user ? (
              <div className="flex items-center gap-8">
                <div
                  onClick={() => {
                    navigate("/saved");
                    setTimeout(() => {
                      window.scroll(0, 0);
                    }, 100);
                  }}
                  className="relative  max-[640px]:hidden"
                >
                  <img src={saveWhite} alt="" />
                  <p
                    style={{
                      display: save.length > 0 ? "" : "none",
                      borderColor: scrolled ? "" : "#8d6a46",
                    }}
                    className="absolute transition-all top-[-8px] right-[-8px] bg-[red] border-[2px] border-[#fff] w-[23px] h-[23px] text-center leading-[18px] rounded-[50%] text-[#fff]"
                  >
                    {save.length}
                  </p>
                </div>
                <div id="profile">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={
                      user && user.photoURL
                        ? user.photoURL
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_we7r5CWAZRO7KN7WjBPMnjp4hDlLIrVGYad4FRuh2g&s"
                    }
                    alt="avatar"
                  />
                  <h2 id="userName">{user.displayName}</h2>
                </div>
                <img
                  onClick={() => signOut(auth)}
                  className="w-[30px] max-[640px]:hidden"
                  src="https://cdn-icons-png.flaticon.com/512/3580/3580154.png"
                  alt="signOut"
                />
              </div>
            ) : (
              <div className="flex gap-4 items-center max-[640px]:hidden">
                <button
                  onClick={() => navigate("/log_in")}
                  className="text-[20px] h-[35px] bg-[#FF9A31] px-[16px] text-[#543118] flex items-center rounded-[10px]"
                >
                  Вход
                </button>
                <button
                  onClick={() => navigate("/sign_up")}
                  className="text-[20px] h-[35px] bg-[#FF9A31] px-[16px] text-[#543118] flex items-center rounded-[10px]"
                >
                  Регистрация
                </button>
              </div>
            )}
            <div
              onClick={() => setBurger(!burger)}
              className="relative w-[35px] h-[29px] z-10 min-[1025px]:hidden"
            >
              <span
                style={{
                  transform: burger ? "rotate(135deg)" : "",
                  top: burger ? "13px" : "",
                }}
                className="absolute transition-all w-[100%] h-[3px] bg-[#FF9A31] rounded-[2px] top-0"
              ></span>
              <span
                style={{
                  transform: burger ? "scale(0)" : "",
                  top: burger ? "10px" : "",
                }}
                className="absolute transition-all w-[100%] h-[3px] bg-[#FF9A31] rounded-[2px] top-[50%] translate-y-[-50%]"
              ></span>
              <span
                style={{
                  transform: burger ? "rotate(-135deg)" : "",
                  bottom: burger ? "13px" : "",
                }}
                className="absolute transition-all w-[100%] h-[3px] bg-[#FF9A31] rounded-[2px] bottom-0"
              ></span>
            </div>
          </div>
        </div>

        <div
          style={{
            transform: burger ? "" : "translateY(-200%)",
          }}
          id="menu"
          className="absolute transition-all  list-none flex flex-col gap-3 p-[20px] bg-[#B67C3F] border-[2px] border-[#50381f] w-[190px] rounded-lg right-0 top-[100px]"
        >
          {user ? (
            <div
              onClick={() => {
                navigate("/saved");
                setBurger(false);
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 100);
              }}
              className="flex items-center gap-3 min-[640px]:hidden"
            >
              <li className="text-[17px] text-[#380202] cursor-pointer">
                Сохранненые
              </li>
              <p
                style={{
                  display: save.length > 0 ? "" : "none",
                }}
                className="bg-[red] border-[2px] border-[#fff] w-[23px] h-[23px] text-center leading-[18px] rounded-[50%] text-[#fff]"
              >
                {save.length}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/log_in")}
                className="text-[19px] justify-center h-[35px] bg-[#714424] px-[16px] text-[#fff] flex items-center rounded-[10px] min-[640px]:hidden"
              >
                Вход
              </button>
              <button
                onClick={() => navigate("/sign_up")}
                className="text-[19px] justify-center h-[35px] bg-[#714424] px-[16px] text-[#fff] flex items-center rounded-[10px] min-[640px]:hidden"
              >
                Регистрация
              </button>
            </div>
          )}
          <li
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                windowWidth < 500
                  ? window.scroll(0, 1400)
                  : window.scroll(0, 1350);
              }, 100);
              setBurger(false);
            }}
            className="text-[17px] text-[#380202] cursor-pointer"
          >
            Категории
          </li>
          <li
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                scrollPopular();
              }, 100);
              setBurger(false);
            }}
            className="text-[17px] text-[#380202] cursor-pointer"
          >
            Популярные
          </li>
          <li
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                windowWidth < 800
                  ? window.scroll(0, 670)
                  : window.scroll(0, 750);
              }, 100);
              setBurger(false);
            }}
            className="text-[17px] text-[#380202] cursor-pointer"
          >
            Добавить рецепт
          </li>
          <li
            onClick={() => signOut(auth)}
            className="text-[17px] text-[#380202] cursor-pointer flex items-center gap-2"
          >
            Выйти
            <img
              className="w-[20px]"
              src="https://cdn-icons-png.flaticon.com/512/3580/3580154.png"
              alt="signOut"
            />
          </li>
        </div>
      </div>
    </header>
  );
};
