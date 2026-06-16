import prisma from "../config/prisma.js";

export const getExplanation =
  async (req, res) => {

    try {

      const { topic } = req.params;

      const explanation =
        await prisma.topicExplanation.findFirst({

          where: {
            topic,
          },

        });

      if (!explanation) {

        return res.status(404).json({

          message:
            "Explanation not found",

        });

      }

      res.json(explanation);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Server Error",

      });

    }

  };