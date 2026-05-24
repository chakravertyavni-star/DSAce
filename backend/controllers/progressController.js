import prisma from "../lib/prisma.js";

export const saveProgress = async (req, res) => {
  try {

    const userId = req.user.id;

    const {
      subjectId,
      topicName,
      completed,
      quizScore,
    } = req.body;

    const progress =
      await prisma.progress.create({
        data: {
          userId,
          subjectId,
          topicName,
          completed,
          quizScore,
        },
      });

    res.status(201).json({
      message: "Progress saved",
      progress,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }
};


export const getProgress = async (req, res) => {
  try {

    const userId = req.user.id;

    const progress =
      await prisma.progress.findMany({
        where: {
          userId,
        },
      });

    res.status(200).json({
      progress,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }
};