import {HomeOutlined} from  "@mui/icons-material";
import {LocalLibraryOutlined} from  "@mui/icons-material";
import {TrendingUpOutlined }from  "@mui/icons-material";
import {DescriptionOutlined }from  "@mui/icons-material";



export const MenuList = [
  {
    icon: <HomeOutlined />,
    title: "Home",
    items: []
  },
  {
    icon: <LocalLibraryOutlined />,
    title: "Education",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines"
          },
          {
            title: "Support & Resistance",
            to: "/sandr"
          }
        ]
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory1",
            to: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines"
          },
          {
            title: "Support & Resistance",
            to: "/sandr"
          }
        ]
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines"
          },
          {
            title: "Support & Resistance",
            to: "/sandr"
          }
        ]
      }
    ]
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Options"
  },
  {
    icon: <DescriptionOutlined />,
    title: "Blog"
  }
];