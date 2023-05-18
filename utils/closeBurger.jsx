"use client";

import React from 'react'

const closeBurger = () => {
    function burgerChecker() {
        let x = document.getElementById("navlist");

        if (x.className !== "navlist") {
            x.classname = "navlist"
        }
    }

  return (
    burgerChecker()
  )
}

export default closeBurger;