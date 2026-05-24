import prisma from "../config/prisma.js";

export const updateTopicProgress = async (
  req,
  res
) => {

  try {

    const userId = req.user.id;

    const {
      subjectId,
      topicName,
      mode,
    } = req.body;

    let existing =
      await prisma.topicProgress.findFirst({

        where: {
          userId,
          subjectId,
          topicName,
        },

      });

    if (!existing) {

      existing =
        await prisma.topicProgress.create({

          data: {
            userId,
            subjectId,
            topicName,
          },

        });

    }

    const updated =
      await prisma.topicProgress.update({

        where: {
          id: existing.id,
        },

        data: {

          aiCompleted:
            mode === "ai"
              ? true
              : existing.aiCompleted,

          quizCompleted:
            mode === "quiz"
              ? true
              : existing.quizCompleted,

        },

      });

    res.status(200).json(updated);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Progress update failed",
    });

  }

};

export const getSubjectProgress =
  async (req, res) => {

    try {

      const userId =
        req.user.id;

      const {
        subjectId
      } = req.params;

      const progress =
        await prisma.topicProgress.findMany({

          where: {

            userId,
            subjectId,

          },

        });

      res.status(200).json(
        progress
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed to fetch progress",

      });

    }
};