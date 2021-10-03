import React from "react"
import { Link } from "react-router-dom"

function SidebarOption({ active, text, Icon, link }) {
  return (
    <Link
      to={link ? `/${link}` : "/home"}
      className={`sidebarOption ${active && "sidebarOption--active"}`}
    >
      <Icon />
      <h2 className="sidebarOption__title">{text}</h2>
    </Link>
  )
}

export default SidebarOption
