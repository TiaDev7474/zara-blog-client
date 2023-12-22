"use client"
import {ButtonPropsType} from "@/app/_lib/definition";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Button({label, onClick, to, isLink, type, icon, style}: ButtonPropsType){
   const isSecondaryCta = type == "secondary"
   const isOutlinedCta = type == "outlined"
   const isPrimaryCta = type == "primary"
   return (
      <React.Fragment>
          {
              isLink ? (
                  <Link
                      className={clsx("btn group", style,{
                         "btn-outlined": isOutlinedCta,
                         "btn-secondary":isSecondaryCta,
                         "btn-primary": isPrimaryCta,
                      }

                      )}
                      href={to!}
                  >
                      <span className={clsx("py-2 px-4 hover:bg-opacity-10 ", {
                         "btn-outlined-hovered": isOutlinedCta,
                      })}>
                         {label}
                      </span>
                  </Link>
              ): (
                  <button
                      onClick={onClick}
                      type="button"
                      className={clsx("btn group", style, {
                           "btn-outlined": isOutlinedCta,
                           "btn-secondary": isSecondaryCta,
                           "btn-primary": isPrimaryCta
                      })
                      }
                  >
                      <span>
                          {icon}
                      </span>
                     <span className={clsx("py-2 px-4 hover:bg-opacity-10  ", {
                        "btn-outlined-hovered": isOutlinedCta,
                     })}>
                          {label && label.charAt(0).toUpperCase() + label.slice(1)}
                      </span>
                  </button>
              )
          }
      </React.Fragment>
   )
}