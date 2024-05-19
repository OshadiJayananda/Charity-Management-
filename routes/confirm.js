const router = require("express").Router();
const confirmation = require("../models/confirm");


// Route for adding confirmation
router.route("/addconfirm").post((req, res) => {
    const { name, phone, email, time } = req.body;

    const newConfirmation = new confirmation({
        name,
        phone,
        email,
        time
    });

    newConfirmation.save()
        .then(() => {
            res.json("Confirmation added successfully");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error occurred while adding confirmation");
        });
});

// Route for reading confirmation
router.route("/read").get((req, res) => {
    confirmation.find()
        .then((confirmations) => {
            res.json(confirmations);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Error occurred while fetching confirmations");
        });
});

module.exports = router;