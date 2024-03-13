import resend
from dotenv import load_dotenv
import os

load_dotenv()

resend.api_key = os.getenv('RESEND_KEY')


def get_formatted_HTML_notif(username, from_location, to_location, leave_time):


    html = """<!doctype html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Simple Transactional Email</title>
        <style media="all" type="text/css">
        /* -------------------------------------
        GLOBAL RESETS
    ------------------------------------- */

        body {
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 1.3;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }

        table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%;
        }

        table td {
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        vertical-align: top;
        }
        /* -------------------------------------
        BODY & CONTAINER
    ------------------------------------- */

        body {
        background-color: #f4f5f6;
        margin: 0;
        padding: 0;
        }

        .body {
        background-color: #f4f5f6;
        width: 100%;
        }

        .container {
        margin: 0 auto !important;
        max-width: 600px;
        padding: 0;
        padding-top: 24px;
        width: 600px;
        }

        .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 600px;
        padding: 0;
        }
        /* -------------------------------------
        HEADER, FOOTER, MAIN
    ------------------------------------- */

        .main {
        background: #ffffff;
        border: 1px solid #eaebed;
        border-radius: 16px;
        width: 100%;
        }

        .wrapper {
        box-sizing: border-box;
        padding: 24px;
        }

        .footer {
        clear: both;
        padding-top: 24px;
        text-align: center;
        width: 100%;
        }

        .footer td,
        .footer p,
        .footer span,
        .footer a {
        color: #9a9ea6;
        font-size: 16px;
        text-align: center;
        }
        /* -------------------------------------
        TYPOGRAPHY
    ------------------------------------- */

        p {
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        font-weight: normal;
        margin: 1rem;
        margin-bottom: 16px;
        }

        a {
        color: #0867ec;
        text-decoration: underline;
        }
        /* -------------------------------------
        BUTTONS
    ------------------------------------- */
        .bride {
            margin: 1rem;
            width: 100%;
            font-size: 1.875rem;
            line-height: 2.25rem;
            font-weight: 700;
            color: #2774AE;
        }

        .bear-gif {
            margin: 1rem;
            width: 200px; /* Set the width */
            height: auto; /* Maintain aspect ratio */
            border-radius: 10px; /* Add rounded corners */
        }

        .btn {
        margin: 1rem;
        box-sizing: border-box;
        min-width: 100% !important;
        width: 100%;
        }

        .btn > tbody > tr > td {
        padding-bottom: 16px;
        }

        .btn table {
        width: auto;
        }

        .btn table td {
        background-color: #ffffff;
        border-radius: 4px;
        text-align: center;
        }

        .btn a {
        background-color: #ffffff;
        border: solid 2px #0867ec;
        border-radius: 4px;
        box-sizing: border-box;
        color: #0867ec;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        padding: 12px 24px;
        text-decoration: none;
        text-transform: capitalize;
        }

        .btn-primary table td {
        background-color: #0867ec;
        }

        .btn-primary a {
        background-color: #0867ec;
        border-color: #0867ec;
        color: #ffffff;
        }

        @media all {
        .btn-primary table td:hover {
            background-color: #FFD100 !important;
        }
        .btn-primary a:hover {
            background-color: #FFD100  !important;
            border-color: #FFD100 !important;
        }
        }

        /* -------------------------------------
        OTHER STYLES THAT MIGHT BE USEFUL
    ------------------------------------- */

        .last {
        margin-bottom: 0;
        }

        .first {
        margin-top: 0;
        }

        .align-center {
        text-align: center;
        }

        .align-right {
        text-align: right;
        }

        .align-left {
        text-align: left;
        }

        .text-link {
        color: #0867ec !important;
        text-decoration: underline !important;
        }

        .clear {
        clear: both;
        }

        .mt0 {
        margin-top: 0;
        }

        .mb0 {
        margin-bottom: 0;
        }

        .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
        }

        .powered-by a {
        text-decoration: none;
        }

        /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */

        @media only screen and (max-width: 640px) {
        .main p,
        .main td,
        .main span {
            font-size: 16px !important;
        }
        .wrapper {
            padding: 8px !important;
        }
        .content {
            padding: 0 !important;
        }
        .container {
            padding: 0 !important;
            padding-top: 8px !important;
            width: 100% !important;
        }
        .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
        }
        .btn table {
            max-width: 100% !important;
            width: 100% !important;
        }
        .btn a {
            font-size: 16px !important;
            max-width: 100% !important;
            width: 100% !important;
        }
        }
        /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */

        @media all {
        .ExternalClass {
            width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
        }
        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
        }
        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main">

                <!-- START MAIN CONTENT AREA -->
                <tr>
                    <td class="wrapper">
                    <h1 class="bride">BRide.</h1>
                    <p>Hi """ + username + """!</p>
                    <p>The BRide you booked at <b>""" + leave_time + """</b> leaving at <b>""" + from_location + """</b> going to <b>""" + to_location + """</b> has found a match! Please check your account for more information!</p>
                    <img src="https://cdn.dribbble.com/users/3220962/screenshots/6248233/_8.gif" class="bear-gif">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                        <tbody>
                        <tr>
                            <td align="left">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td> <a href="http://localhost:5173/" target="_blank">Go Get My BRide!</a> </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>Thank you for riding with us! Safe travels!&#128756;&#128756;&#128756;</p>
                    <p>&mdash;BRide Team &hearts;</p>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <span class="apple-link">7400 Boelter Hall, Los Angeles, CA 90095</span>
                        <br> Don't like these emails? <a href="https://samueli.ucla.edu/people/paul-eggert/">Unsubscribe</a>.
                    </td>
                    </tr>
                    <tr>
                    </tr>
                </table>
                </div>

                <!-- END FOOTER -->

    <!-- END CENTERED WHITE CONTAINER --></div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>"""

    return html

def get_formatted_HTML_contact(first_name, last_name, contents):


    html = """<!doctype html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Simple Transactional Email</title>
        <style media="all" type="text/css">
        /* -------------------------------------
        GLOBAL RESETS
    ------------------------------------- */

        body {
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 1.3;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        }

        table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%;
        }

        table td {
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        vertical-align: top;
        }
        /* -------------------------------------
        BODY & CONTAINER
    ------------------------------------- */

        body {
        background-color: #f4f5f6;
        margin: 0;
        padding: 0;
        }

        .body {
        background-color: #f4f5f6;
        width: 100%;
        }

        .container {
        margin: 0 auto !important;
        max-width: 600px;
        padding: 0;
        padding-top: 24px;
        width: 600px;
        }

        .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 600px;
        padding: 0;
        }
        /* -------------------------------------
        HEADER, FOOTER, MAIN
    ------------------------------------- */

        .main {
        background: #ffffff;
        border: 1px solid #eaebed;
        border-radius: 16px;
        width: 100%;
        }

        .wrapper {
        box-sizing: border-box;
        padding: 24px;
        }

        .footer {
        clear: both;
        padding-top: 24px;
        text-align: center;
        width: 100%;
        }

        .footer td,
        .footer p,
        .footer span,
        .footer a {
        color: #9a9ea6;
        font-size: 16px;
        text-align: center;
        }
        /* -------------------------------------
        TYPOGRAPHY
    ------------------------------------- */

        p {
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        font-weight: normal;
        margin: 1rem;
        margin-bottom: 16px;
        }

        a {
        color: #0867ec;
        text-decoration: underline;
        }
        /* -------------------------------------
        BUTTONS
    ------------------------------------- */
        .bride {
            margin: 1rem;
            width: 100%;
            font-size: 1.875rem;
            line-height: 2.25rem;
            font-weight: 700;
            color: #2774AE;
        }

        .bear-gif {
            margin: 1rem;
            width: 200px; /* Set the width */
            height: auto; /* Maintain aspect ratio */
            border-radius: 10px; /* Add rounded corners */
        }

        .btn {
        margin: 1rem;
        box-sizing: border-box;
        min-width: 100% !important;
        width: 100%;
        }

        .btn > tbody > tr > td {
        padding-bottom: 16px;
        }

        .btn table {
        width: auto;
        }

        .btn table td {
        background-color: #ffffff;
        border-radius: 4px;
        text-align: center;
        }

        .btn a {
        background-color: #ffffff;
        border: solid 2px #0867ec;
        border-radius: 4px;
        box-sizing: border-box;
        color: #0867ec;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        padding: 12px 24px;
        text-decoration: none;
        text-transform: capitalize;
        }

        .btn-primary table td {
        background-color: #0867ec;
        }

        .btn-primary a {
        background-color: #0867ec;
        border-color: #0867ec;
        color: #ffffff;
        }

        @media all {
        .btn-primary table td:hover {
            background-color: #FFD100 !important;
        }
        .btn-primary a:hover {
            background-color: #FFD100  !important;
            border-color: #FFD100 !important;
        }
        }

        /* -------------------------------------
        OTHER STYLES THAT MIGHT BE USEFUL
    ------------------------------------- */

        .last {
        margin-bottom: 0;
        }

        .first {
        margin-top: 0;
        }

        .align-center {
        text-align: center;
        }

        .align-right {
        text-align: right;
        }

        .align-left {
        text-align: left;
        }

        .text-link {
        color: #0867ec !important;
        text-decoration: underline !important;
        }

        .clear {
        clear: both;
        }

        .mt0 {
        margin-top: 0;
        }

        .mb0 {
        margin-bottom: 0;
        }

        .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
        }

        .powered-by a {
        text-decoration: none;
        }

        /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */

        @media only screen and (max-width: 640px) {
        .main p,
        .main td,
        .main span {
            font-size: 16px !important;
        }
        .wrapper {
            padding: 8px !important;
        }
        .content {
            padding: 0 !important;
        }
        .container {
            padding: 0 !important;
            padding-top: 8px !important;
            width: 100% !important;
        }
        .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
        }
        .btn table {
            max-width: 100% !important;
            width: 100% !important;
        }
        .btn a {
            font-size: 16px !important;
            max-width: 100% !important;
            width: 100% !important;
        }
        }
        /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */

        @media all {
        .ExternalClass {
            width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
        }
        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
        }
        </style>
    </head>
    <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main">

                <!-- START MAIN CONTENT AREA -->
                <tr>
                    <td class="wrapper">
                    <h1 class="bride">BRide.</h1>
                    <p>Hi!</p>
                    <p>""" + first_name +" " + last_name+ """ contacted you from BRide.&#128756; They said:</p>
                    <p>""" + contents + """</p>
                    <p>&mdash;BRide Team &hearts;</p>
                    </td>
                </tr>

                <!-- END MAIN CONTENT AREA -->
                </table>

                <!-- START FOOTER -->
                <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td class="content-block">
                        <span class="apple-link">7400 Boelter Hall, Los Angeles, CA 90095</span>
                        <br> Don't like these emails? <a href="https://samueli.ucla.edu/people/paul-eggert/">Unsubscribe</a>.
                    </td>
                    </tr>
                    <tr>
                    </tr>
                </table>
                </div>

                <!-- END FOOTER -->

    <!-- END CENTERED WHITE CONTAINER --></div>
            </td>
            <td>&nbsp;</td>
        </tr>
        </table>
    </body>
    </html>"""

    return html


def send_notif_email(username, user_email, from_location, to_location, leave_time):
    r = resend.Emails.send({
    "from": "BRide@brideucla.com",
    "to": user_email,
    "subject": "Your BRide at " + leave_time + " going to " + to_location + " is Ready!",
    "html": get_formatted_HTML_notif(username, from_location, to_location, leave_time)})


send_notif_email("cock", "edwardsun12895@g.ucla.edu", "your mom's house", "egger's house", "4:20 PM")

def send_contact_us_email(first_name, last_name, user_email, contents):
    r = resend.Emails.send({
    "from": "BRide@brideucla.com",
    "to": "edwardsun12895@g.ucla.edu",
    "subject": first_name + " " + last_name + " contacted you!",
    "html": get_formatted_HTML_contact(first_name, last_name, contents)})
