"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";
import moment from "moment";

type CardItem = {
  name: string;
  count: string;
};

export default function About() {
  const [contributionData, setContributionData] = useState<number>(0);
  const [isLoading, setLoading] = useState(false);

  const dateExp = moment("20220601", "YYYYMMDD");

  const lastDigitNumber =
    contributionData < 999
      ? contributionData.toString().slice(-1)
      : contributionData.toString().slice(-2);

  const cardItems: CardItem[] = [
    {
      name: "Projects Completed",
      count: "10",
    },
    {
      name: "Years Experience",
      count: dateExp.fromNow().replace(/[^0-9]/g, ""),
    },
    {
      name: "Technologies",
      count: "10",
    },
    {
      name: "GitHub Contributions",
      count: (contributionData - +lastDigitNumber).toString(),
    },
  ];

  useEffect(() => {
    setLoading(true);

    const getContributions = async () => {
      const header = {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_GitHub_Token}`,
      };
      const body = {
        query: `query {
            user(login: "${process.env.NEXT_PUBLIC_GitHub_Username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
      };

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        headers: header,
      });
      const data = await response.json();
      setContributionData(
        data.data.user.contributionsCollection.contributionCalendar
          .totalContributions
      );
      setLoading(false);
      return;
    };

    getContributions();
  }, []);

  return (
    <section id="about-section" className="flex justify-center w-full">
      <div className="max-w-[1280px] w-full px-9 py-5 mt-20 mb-32">
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold"
          >
            About me
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center w-full mt-20"
        >
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <p>
                My passion for web development ignited when I architected and
                built a comprehensive hotel booking system from the ground up.
                That foundational experience in vanilla JavaScript and PHP
                sparked a drive to master the modern web.
              </p>
              <p>
                Now, I&apos;m a Full-Stack Developer who specializes in crafting
                exceptional front-end experiences. I build fast, intuitive, and
                high-quality applications using React, combining my eye for
                design with a strong understanding of back-end architecture to
                bring ideas to life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {isLoading ? (
                <>
                  <Skeleton className="flex flex-col justify-center items-center gap-2 border rounded-lg p-6 shadow-lg w-full h-28" />
                  <Skeleton className="flex flex-col justify-center items-center gap-2 border rounded-lg p-6 shadow-lg w-full h-28" />
                  <Skeleton className="flex flex-col justify-center items-center gap-2 border rounded-lg p-6 shadow-lg w-full h-28" />
                  <Skeleton className="flex flex-col justify-center items-center gap-2 border rounded-lg p-6 shadow-lg w-full h-28" />
                </>
              ) : (
                cardItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center gap-2 bg-accent border rounded-lg p-6 shadow-lg w-full"
                  >
                    <p className="text-primary text-3xl font-semibold">
                      {item.count}+
                    </p>
                    <p>{item.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
