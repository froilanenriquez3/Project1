<?php if (isset($_SESSION['errorMessage'])) { ?>

<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
    <?php

        echo $_SESSION['errorMessage'];
        unset($_SESSION['errorMessage']);

    ?>

    <button class="close" tyep="button" data-dismiss="alert" aria-label="close">
        <span aria-hidden="true">&times;</span>
    </button>

</div>

<?php } ?>


<?php if (isset($_SESSION['error'])) { ?>

<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
    <?php

        echo $_SESSION['error'];
        unset($_SESSION['error']);

    ?>

    <button class="close" tyep="button" data-dismiss="alert" aria-label="close">
        <span aria-hidden="true">&times;</span>
    </button>

</div>

<?php } ?>