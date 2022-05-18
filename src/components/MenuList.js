import {HomeOutlined} from  "@mui/icons-material";
import {LocalLibraryOutlined} from  "@mui/icons-material";
import {TrendingUpOutlined }from  "@mui/icons-material";
import {DescriptionOutlined }from  "@mui/icons-material";



export const MenuList = [
  {
    icon: <HomeOutlined />,
    title: "Home",
    items: [],
    id:1
  },
  {
    icon: <LocalLibraryOutlined />,
    title: "Education",
    id:2,
    items: [
      {
        title: "Technical Analysis",
        id:3,
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
            id:4,
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
            id:5,
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
            id:6,
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
            id:7,
          }
        ]
      },
      {
        title: "Fundamental Analysis",
        id:8,
        items: [
          {
            title: "The Dow Theory1",
            to: "/thedowtheory",
            id:9,
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
            id:10,
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
            id:11,
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
            id:12,
          }
        ]
      },
      {
        title: "Elliot Wave Analysis",
        id:13,
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
            id:14,
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
            id:15,
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
            id:16,
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
            id:17,
          }
        ]
      }
    ]
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Options",
    id:18,
  },
  {
    icon: <DescriptionOutlined />,
    title: "Blog",
    id:19,
  },
  {
    icon: <TrendingUpOutlined />,
    title: "New Tab",
    id:20,
  },
  {
    icon: <DescriptionOutlined />,
    title: "Contact us",
    id:21,
  }
];