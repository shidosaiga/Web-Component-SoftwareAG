// footer-component.js
class CustomFooter extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Define the HTML template
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        
        <style>
            * {
                box-sizing: border-box;
            }
            
            html {
                font-size: 100%;
                word-wrap: break-word;
                -webkit-text-size-adjust: 100%;
                line-height: 1.5;
                height: 100%;
                overflow-y: scroll;
            }
            
            body {
                font-family: Verdana, Geneva, 'DejaVu Sans', Arial, Helvetica, sans-serif;
                line-height: 1.5;
                min-height: 100%;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
                font-smoothing: antialiased;
                
                font-size: 14px;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-weight: 400;
                line-height: 1em;
                padding: 0;
                margin: 24px 0 12px 0;
            }
            
            h1 {
                font-size: 2em;
            }
            
            h2 {
                font-size: 1.571em;
            }
            
            h3 {
                font-size: 1.286em;
            }
            
            h4 {
                font-size: 1.143em;
            }
            
            h5 {
                font-size: 1.071em;
            }
            
            h6 {
                font-size: 1em;
            }
            
            img,
            a img {
                border: none;
            }
            
            img {
                max-width: 100%;
                height: auto;
            }
            
            p {
                margin: 0 0 1.5em;
                padding: 0;
            }
            
            em,
            dfn {
                font-style: italic;
            }
            
            ins {
                border-bottom: none;
                text-decoration: none;
            }
            
            abbr,
            acronym {
                border-bottom: 1px dotted;
                cursor: help;
                white-space: nowrap;
            }
            
            pre,
            code,
            tt,
            samp,
            kbd,
            var {
                font-family: "DejaVu Sans Mono", monospace, sans-serif;
            }
            
            blockquote,
            q {
                font-style: italic;
                quotes: "" "";
            }
            
            blockquote,
            p {
                margin: 1.5em 0;
            }
            
            p:first-child,
            p.first-child {
                margin-top: 0;
            }
            
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
                content: "";
            }
            
            strong,
            dfn,
            caption,
            th {
                font-weight: 700;
            }
            
            pre,
            div.codeblock {
                background-color: #f5f5f5;
                border: solid 1px #ddd;
                border-bottom-color: #ccc;
                border-right-color: #ccc;
                padding: 1em;
                white-space: pre-wrap;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
            }
            
            ul,
            ol {
                margin: 0 0 1.5em 1em;
                padding: 0;
            }
            
            .item-list ul,
            .item-list ol {
                margin: 0 0 0 1em;
                padding: 0;
            }
            
            ul ul,
            ul ol,
            ol ol,
            ol ul,
            .block ul ul,
            .block ul ol,
            .block ol ol,
            .block ol ul,
            .item-list ul ul,
            .item-list ul ol,
            .item-list ol ol,
            .item-list ol ul {
                margin-bottom: 0;
            }
            
            ul {
                list-style-type: disc;
            }
            
            ul ul ul {
                list-style-type: square;
            }
            
            ol {
                list-style-type: decimal;
            }
            
            ol ol {
                list-style-type: lower-alpha;
            }
            
            ol ol ol {
                list-style-type: lower-roman;
            }
            
            ul ul,
            ul ul ul ul {
                list-style-type: circle;
            }
            
            dl {
                margin: 1em 0;
                padding: 0;
            }
            
            dt {
                font-size: 1.231em;
            }
            
            dd {
                margin: 0 0 0.4em 0;
                padding: 0 0 0 2em;
            }
            
            dd:last-child {
                border-bottom: 0;
            }
            
            dl dl {
                margin-left: 1em;
            }
            
            img {
                max-width: 100%;
                height: auto;
                -ms-interpolation-mode: bicubic;
            }
            
            img,
            embed,
            object,
            video {
                max-width: 100%;
            }
            
            .lt-ie9 img,
            .lt-ie9 object,
            .lt-ie9 embed,
            .lt-ie9 video {
                max-width: none;
            }
            
            #map img,
            .gmap img,
            .view-gmap img,
            .openlayers-map img,
            #getlocations_map_canvas img,
            #locationmap_map img,
            .geofieldMap img,
            .views_horizontal_slider img,
            .field-widget-imagefield-crop-widget img {
                max-width: none !important;
            }
            
            svg:not(:root) {
                overflow: hidden;
            }
            
            audio,
            canvas,
            video {
                display: inline-block;
                *display: inline;
                *zoom: 1;
            }
            
            audio:not([controls]) {
                display: none;
            }
            
            a:hover {
                text-decoration: underline;
            }
            
            .mesh-portal-product .operationDetails>a,
            .mesh-portal-product .operationDetails>a:hover,
            .mesh-portal-product .operationDetails>a:focus,
            .mesh-portal-product .definitionsContent>a,
            .mesh-portal-product .definitionsContent>a:hover,
            .mesh-portal-product .definitionsContent>a:focus {
                text-decoration: none;
            }
            
            .myorgAddUserLink h3 {
                font-size: 0.83rem;
            }
            
            fieldset {
                border: solid 1px #e6e4e2;
                margin: 1.2em 0;
                padding: 0 0 1em 0;
                position: relative;
            }
            
            .fieldset-wrapper {
                padding: 2.4em 1em 1em 1em;
            }
            
            .fieldset-description {
                padding: 1em 0;
            }
            
            html.js fieldset.collapsed {
                border: solid 1px #e6e4e2;
                height: 3.2em;
            }
            
            legend {
                display: block;
                color: #999;
                font-weight: 600;
                font-size: 0.923em;
                left: 1em;
                letter-spacing: 0.25em;
                line-height: normal;
                position: absolute;
                text-transform: uppercase;
                top: 1em;
            }
            
            legend a.fieldset-title {
                color: #999;
            }
            
            .js fieldset.collapsible legend a {
                background: url(/bot/public/sites/all/themes/connect_theme/css/images/gray.png) no-repeat 0 -132px;
                padding-left: 20px;
                -moz-transition: color 0.3s linear;
                -webkit-transition: color 0.3s linear;
                transition: color 0.3s linear;
            }
            
            .js fieldset.collapsible legend a:hover,
            .js fieldset.collapsible legend a:focus,
            .js fieldset.collapsible legend a:active {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/black.png);
                color: #444;
            }
            
            .js fieldset.collapsed legend a {
                background-position: 0 -198px;
            }
            
            html.js fieldset.collapsed .fieldset-legend,
            html.js fieldset.collapsible .fieldset-legend {
                background-image: none;
                padding: 0;
            }
            
            #edit-advanced {
                clear: both;
            }
            
            label {
                cursor: pointer;
                font-weight: 500;
            }
            
            .form-item label {
                display: block;
                font-size: 1.077em;
                margin-bottom: 0.2em;
                margin-left: 3px;
            }
            
            .form-item .form-item label {
                display: inline;
                font-size: 1em;
            }
            
            table label,
            .form-item label.option {
                display: inline;
                font-size: 1em;
                font-weight: normal;
            }
            
            select {
                margin-bottom: 3px;
                padding: 2px;
            }
            
            .form-item {
                margin: 1.4em 0;
            }
            
            .fieldset-wrapper .form-item:first-child {
                margin-top: 0.4em;
            }
            
            .form-item .form-item {
                margin: 0.5em 0;
            }
            
            .form-type-checkbox,
            .form-type-radio {
                margin: 1em 0;
            }
            
            .form-actions {
                margin-top: 1em;
                padding: 1em 0;
            }
            
            .filter-wrapper .fieldset-wrapper {
                padding: 0;
            }
            
            input.form-text {
                max-width: 100%;
            }
            
            input,
            textarea {
                line-height: 1.6em;
            }
            
            textarea.form-textarea,
            textarea {
                border: solid 1px #e6e4de;
                padding: 0.5em;
                -moz-border-radius: 0 0 0 0;
                -webkit-border-top-right-radius: 0;
                -webkit-border-top-left-radius: 0;
                border-radius: 0 0 0 0;
                font-size: 13px;
            }
            
            input.form-text,
            select[multiple="multiple"] {
                border: solid 1px #e6e4de !important;
                padding-left: 5px;
                padding-right: 5px;
            }
            
            .ie9 input.form-text,
            .ie9 select[multiple="multiple"],
            .chrome input.form-text,
            .chrome select[multiple="multiple"] {
                padding: 2px 4px;
            }
            
            select {
                max-width: 100%;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            
            button,
            input[type="submit"],
            input.form-submit,
            .form-actions a,
            .form-actions a:visited,
            .button,
            a.button,
            a.button:visited,
            .banner_block .banner_button a,
            a.buttonLink,
            .portal .migratePlanContainer .migrateButton a,
            .numberedList a,
            .supportList a {
                background-image: none;
                color: #ffffff;
                padding: 0.5em 1.5em;
                border: 1px solid #e6e4e2;
                border-bottom-color: #bbbbbb;
                border-right-color: #bbbbbb;
                font-size: 1em;
                font-weight: 500;
                margin: 0 0.5em 0 0;
                overflow: hidden;
                vertical-align: middle;
            }
            
            .form-actions a,
            .form-actions a:visited,
            .form-actions a:hover,
            .form-actions a:focus,
            .form-actions a:active {
                display: inline-block;
                line-height: 1.2em;
            }
            
            button:hover,
            input[type="submit"]:hover,
            input.form-submit:hover,
            .form-actions a:hover,
            .form-actions a:focus,
            .form-actions a:active,
            .button:hover,
            a.button:hover,
            a.button:focus,
            a.button:active,
            .banner_block .banner_button a:hover,
            .banner_block .banner_button a:focus,
            .banner_block .banner_button a:active,
            a.buttonLink:hover,
            a.buttonLink:focus,
            a.buttonLink:active,
            .portal .migratePlanContainer .migrateButton a:hover,
            .portal .migratePlanContainer .migrateButton a:focus,
            .portal .migratePlanContainer .migrateButton a:active,
            .numberedList a:hover,
            .numberedList a:focus,
            .numberedList a:active,
            .supportList a:hover,
            .supportList a:focus,
            .supportList a:active {
                background-image: none;
                color: #aaaaaa;
                border: 1px solid #4884d1;
                border-bottom-color: #aaaaaa;
                border-right-color: #aaaaaa;
                cursor: pointer;
                text-decoration: none;
            }
            
            textarea:focus,
            input[type="password"]:focus,
            input[type="search"]:focus,
            input[type="text"]:focus,
            select[multiple="multiple"]:focus,
            .form-text:focus {
                outline: 0;
                -webkit-box-shadow: 0 0 5px 3px rgba(169, 169, 169, 0.4);
                -moz-box-shadow: 0 0 5px 3px rgba(169, 169, 169, 0.4);
                box-shadow: 0 0 5px 3px rgba(169, 169, 169, 0.4);
                border-color: rgba(213, 213, 213, 0.5);
                -webkit-appearance: textfield;
            }
            
            .description {
                color: #777;
                font-size: 0.923em;
                line-height: 1.5;
            }
            
            .form-item .description {
                margin-top: 0.4em;
                padding-left: 0.4em;
            }
            
            .form-required {
                color: #bd530b;
                font: bold 1em Tahoma, Verdana, Geneva;
            }
            
            .container-inline .form-item label {}
            
            .container-inline .form-submit {
                font-size: 0.923em;
                line-height: 1.5em;
                margin: 0 0.3em 0 0;
                padding: 0.2em 1em;
            }
            
            .container-inline .form-actions {
                padding: 0;
            }
            
            html.js input.form-autocomplete {
                background-position: 99% 6px;
            }
            
            html.js input.throbbing {
                background-position: 99% -12px;
            }
            
            .vertical-tabs fieldset.vertical-tabs-pane {
                padding: 0;
            }
            
            .vertical-tabs .fieldset-wrapper {
                padding: 1em 0.5em;
            }
            
            div.vertical-tabs,
            div.vertical-tabs ul.vertical-tabs-list,
            div.vertical-tabs ul.vertical-tabs-list li {
                border-color: #e6e4e2;
            }
            
            .vertical-tabs ul.vertical-tabs-list li {
                background-color: #efedea;
            }
            
            .vertical-tabs ul.vertical-tabs-list li a {
                -moz-transition: none;
                -webkit-transition: none;
                transition: none;
            }
            
            .vertical-tabs ul.vertical-tabs-list li a:hover,
            .vertical-tabs ul.vertical-tabs-list li a:focus {
                color: #000;
                outline: none;
            }
            
            .vertical-tabs ul.vertical-tabs-list li a:focus strong,
            .vertical-tabs ul.vertical-tabs-list li a:active strong,
            .vertical-tabs ul.vertical-tabs-list li a:hover strong {
                text-decoration: none;
            }
            
            .vertical-tabs .summary {
                font-size: 0.923em;
            }
            
            body.wysiwygeditor {
                background: #fff none;
            }
            
            body.wysiwygeditor {
                background-color: #fff;
                background-image: none;
            }
            
            .af-button-large,
            .af-button-small,
            .author-pane-link {
                background: #FFF none;
                border: 1px solid #5596e6;
                font-size: 0.923em;
                line-height: 1.5em;
                margin: 0 0.3em 0 0;
                padding: 0.2em 1em;
                color: #5596e6;
            }
            
            .forum-node-create-links-top {
                padding-bottom: 20px;
            }
            
            a.af-button-large,
            a.af-button-large:link,
            a.af-button-large:visited,
            a.af-button-small,
            a.af-button-small:link,
            a.af-button-small:visited,
            a.author-pane-link,
            a.author-pane-link:link,
            a.author-pane-link:visited {
                color: #5596e6;
            }
            
            a.af-button-large:hover,
            a.af-button-small:hover,
            a.author-pane-link:hover,
            a.af-button-large:active,
            a.af-button-small:active,
            a.author-pane-link:active {
                background: #C8DBEA;
                color: #3C78A7;
                border-top-color: #5596e6;
            }
            
            .forum-post-footer {
                background-color: #F2F2F2;
                color: #444849;
            }
            
            .forum-post-info {
                background-color: #F2F2F2;
                color: #444849;
                margin-bottom: 0;
                border-bottom: none;
            }
            
            .forum-post-info,
            .forum-post-wrapper,
            .forum-post-footer {
                border: none;
                background: #F2F2F2;
                color: #444849;
            }
            
            div.forum-post {
                border: 1px solid #CCCCCC !important;
            }
            
            .forum-post-title {
                border: none;
                background-color: #464C5A;
                line-height: 225%;
                padding-bottom: 2px;
                color: #dddddd;
            }
            
            .forum-table {
                border: 1px solid #dddddd !important;
                color: #494949;
                border-collapse: separate;
                margin: 0 0 10px;
                padding: 0;
                width: 100%;
                background-color: #FFF;
            }
            
            .forum-table thead tr {
                border-top: 1px solid #FFF;
                background: #464C5A;
                color: #dddddd;
                line-height: 1.5em;
                padding: 2px 5px;
            }
            
            .forum-table tr.odd {
                background: #F2F2F2;
            }
            
            .forum-table tr.even {
                background: #dddddd;
            }
            
            .forum-table thead tr a,
            .forum-table thead tr a:visited,
            .forum-table thead tr a:link,
            .forum-post-title a,
            .forum-post-title a:visited,
            .forum-post-title a:link {
                color: #dddddd !important;
            }
            
            .forum-table-wrap .forum-table-superheader {
                background-color: #F2F2F2;
                border-color: #F2F2F2;
            }
            
            #forum-statistics {
                border: none;
            }
            
            #forum-statistics-header {
                border: none;
                background: #494949 none;
                color: #ddd;
            }
            
            .forum-statistics-sub-header {
                background-color: #f2f2f2;
                color: #222;
                border-top: 0;
                border-bottom: 2px solid #FFF;
            }
            
            .forum-statistics-sub-body {
                background-color: #f2f2f2;
                color: #494949;
            }
            
            .wysiwyg-toggle-wrapper {
                border-left: 1px solid #dddddd;
                border-right: 1px solid #dddddd;
                padding: 2px 10px;
            }
            
            ul.ui-autocomplete li.ui-menu-item .ui-autocomplete-field-title,
            ul.ui-autocomplete li.ui-menu-item .ui-autocomplete-field-name,
            ul.ui-autocomplete li.ui-menu-item .ui-autocomplete-field-comment_count {
                font-size: 1em;
            }
            
            table {
                border: solid #e4e2e0;
                border-collapse: collapse;
                border-width: 1px 1px 0 1px;
                margin: 1em 0;
                width: 100%;
            }
            
            th {
                font-weight: 600;
                text-align: left;
            }
            
            th,
            td {
                border: solid #e4e2e0;
                border-width: 0 0 1px 0;
                padding: 0.5em;
                vertical-align: top;
            }
            
            thead th:last-child,
            tr td:last-child {
                border-right: solid 1px #e4e2e0;
            }
            
            .all-tags tr td:last-child {
                border-right: 0;
            }
            
            table .form-item,
            table p {
                margin: 0;
            }
            
            tr td:last-child {
                border-right: 1px solid #e4e2e0;
            }
            
            .block-inner,
            .pane-inner,
            .menu-wrapper,
            .branding-elements,
            .breadcrumb-wrapper,
            .attribution,
            .at-panel .rounded-corner,
            .block-panels-mini>.block-title,
            div.messages {
                margin-left: 20px;
                margin-right: 20px;
            }
            
            .pane-bean-banner-block .block-inner {
                margin: 0;
            }
            
            body.not-front .columns {
                padding-top: 10px;
            }
            
            body.not-front .columns-inner {
                padding: 20px;
            }
            
            body.not-front.node-type-application .columns-inner {
                padding: 20px 0 20px 0;
            }
            
            body.not-front.node-type-application .columns-inner .portal {
                padding-left: 20px;
                padding-right: 20px;
            }
            
            body.not-front.node-type-product .columns-inner,
            body.not-front.node-type-api .columns-inner {
                padding: 20px 0;
            }
            
            body.not-front #api-node-form,
            body.not-front #product-node-form,
            body.not-front #application-node-form {
                padding: 0 20px;
            }
            
            body.not-front.page-user .columns-inner,
            body.not-front.page-user.page-user-edit #page,
            body.not-front.page-ibm-apim-forgotpwd .columns-inner,
            body.not-front.page-ibm-apim-activate .columns-inner {
                max-width: 1060px;
                margin: auto;
            }
            
            body.not-front.page-blog .columns-inner,
            body.not-front.node-type-page .columns-inner {
                max-width: 960px;
                margin: auto;
            }
            
            body.frontpage .columns-inner,
            body.not-front.frontpage .columns-inner {
                padding: 0;
            }
            
            .panel-pane {
                padding: 20px;
            }
            
            .panel-pane.pane-bean-banner-block {
                padding: 0;
            }
            
            #page>header {
                clear: both;
                padding: 0;
            }
            
            .maintenance-page.in-maintenance #main-content {
                margin-top: 100px;
            }
            
            .maintenance-page.in-maintenance #content {
                padding: 50px;
            }
            
            #branding {
                float: left;
                margin: 0;
                width: 40%;
            }
            
            #logo {
                padding: 0 20px;
                float: left;
            }
            
            #page>header>.h-group {
                line-height: 1.2;
                margin: 0 12px;
            }
            
            h1#site-name {
                font-size: 3.692em;
                margin: 0 0 0.2em 0;
                padding: 0;
            }
            
            h2#site-slogan {
                font-size: 1.077em;
                margin: 0;
                padding: 0;
            }
            
            #site-name {
                font-size: 1.846em;
            }
            
            #site-name a {
                text-decoration: none;
            }
            
            #site-name a:visited {}
            
            #site-name a:hover {}
            
            #site-name a:focus {}
            
            #site-name a:active {}
            
            #site-slogan {
                font-size: 1.077em;
                font-weight: 400;
            }
            
            .region-header {
                float: right;
                max-width: 60%;
                clear: none;
            }
            
            .region-header .region-inner {
                margin-top: 10px;
            }
            
            h1#page-title {
                margin-top: 0;
            }
            
            .in-maintenance h1#page-title {
                padding: 10px;
                margin-top: 0;
            }
            
            #content-column,
            .region-sidebar-first,
            .region-sidebar-second {}
            
            .region-content-aside {
                padding-top: 20px;
            }
            
            .region-tertiary-content {
                padding-bottom: 20px;
            }
            
            a.feed-icon {
                padding: 10px;
            }
            
            #page>footer {
                padding: 8px 0;
                margin: 40px 0;
            }
            
            .front #page>footer {
                margin: 0;
            }
            
            .feed-icon img {
                padding: 0 10px;
                box-sizing: initial;
            }
            
            .search-results {
                margin: 0;
            }
            
            .search-results .search-result {}
            
            .search-results .title {
                font-size: 1.154em;
            }
            
            .search-results .search-snippet-info {
                padding: 0;
            }
            
            .search-results p {
                margin: 0;
            }
            
            .search-results .search-snippet {}
            
            .search-results .search-info {
                font-size: .923em;
            }
            
            .maintenance-page #skip-link {
                position: absolute;
                top: -99em;
            }
            
            .maintenance-page footer {
                margin: 10px 0 0;
            }
            
            .maintenance-page footer a {
                text-decoration: none;
                color: #ccc;
            }
            
            div.messages {
                margin: 5px 20px;
            }
            
            .gmap img,
            .view-gmap img,
            #getlocations_map_canvas img {
                max-width: none;
            }
            
            .js .region-collapsible,
            .collapsible-toggle {
                display: none;
            }
            
            .region-collapsible-wrapper {
                display: none;
            }
            
            .toggle-active .region-collapsible-wrapper {
                display: block;
            }
            
            .section-collapsible,
            .region-highlighted {
                padding: 1em 0;
            }
            
            .js .section-collapsible {
                top: 140px;
                height: auto !important;
                max-height: 50%;
                position: fixed;
                right: 0;
                z-index: 100;
            }
            
            .section-collapsible.toggle-active {
                overflow: auto;
                -moz-box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
                -webkit-box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
                box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
                min-width: 250px;
            }
            
            .region-collapsible {
                padding: 15px 0 15px 15px;
                overflow: hidden;
            }
            
            .region-collapsible .block {
                margin: 0;
                padding: 0;
                overflow: hidden;
            }
            
            .js .collapsible-toggle {
                border: none;
                display: block;
                font-size: 1.077em;
                font-weight: 500;
                margin: 0;
                position: relative;
                text-transform: uppercase;
            }
            
            .collapsible-toggle .togglebg {
                top: 140px;
                background: #fff;
                display: inline-block;
                height: 45px;
                padding: 1em;
                position: fixed;
                right: 0;
                text-indent: -999em;
                width: 40px;
                z-index: 1;
                -moz-border-radius: 4px 0 0 4px;
                -webkit-border-radius: 4px 0 0 4px;
                border-radius: 4px 0 0 4px;
                -moz-box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
                -webkit-box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
                box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
            }
            
            .toggle-active .collapsible-toggle .togglebg {
                position: relative;
                float: right;
                -moz-border-radius: 0 0 0 4px;
                -webkit-border-radius: 0 0 0 4px;
                border-radius: 0 0 0 4px;
                -moz-box-shadow: none;
                -webkit-box-shadow: none;
                box-shadow: none;
                top: 0;
            }
            
            .collapsible-toggle a,
            .collapsible-toggle a:visited {
                background: url(/bot/public/sites/all/themes/connect_theme/css/images/black.png) no-repeat 16px -248px;
                display: inline-block;
                height: 45px;
                padding: 1em;
                text-indent: -999em;
                width: 40px;
                position: fixed;
                right: 0;
                top: 140px;
                transition: none;
            }
            
            .toggle-active .collapsible-toggle a {
                background-position: 16px -385px;
                float: right;
            }
            
            .collapsible-toggle a:hover,
            .collapsible-toggle a:focus,
            .collapsible-toggle a:active {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/gray.png);
                outline: 0;
            }
            
            .link {
                background-position: 0 0;
            }
            
            .locked {
                background-position: 0 -66px;
            }
            
            .minus {
                background-position: 0 -132px;
            }
            
            .plus {
                background-position: 0 -198px;
            }
            
            .popout {
                background-position: 0 -264px;
            }
            
            .search {
                background-position: 0 -330px;
            }
            
            .x {
                background-position: 0 -396px;
            }
            
            body.page-home .region-two-50-top,
            body.frontpage .region-two-50-top {
                padding-bottom: 20px;
            }
            
            body.page-home .region-two-50-top .block-inner,
            body.frontpage .region-two-50-top .block-inner {
                margin-left: 0;
                margin-right: 0;
            }
            
            .reg-form,
            #forum-statistics {
                margin-bottom: 20px;
            }
            
            .ui-dialog.ui-widget.ui-widget-content.linkit-wrapper {
                height: 700px;
                overflow: auto;
            }
            
            .numberedList {
                counter-reset: page-list-counter;
            }
            
            .numberedList h3,
            .supportList h3 {
                margin-top: 10px;
            }
            
            .numberedList a,
            .supportList a {
                margin-top: 20px;
                display: inline-block;
            }
            
            ol.numberedList,
            ul.supportList {
                list-style-type: none;
            }
            
            .numberedList li {
                position: relative;
                padding: 4px 0 10px 60px;
            }
            
            .supportList li {
                position: relative;
                padding: 10px 0;
            }
            
            .numberedList li:before {
                content: counter(page-list-counter);
                counter-increment: page-list-counter;
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 50%;
                border: 1px solid #000000;
                width: 1em;
                line-height: 1.5em;
                padding-left: 0.55em;
                font-size: 1.5em;
                margin-top: 10px;
            }
            
            .numberedList li:after,
            .supportList li:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 23%;
                width: 93%;
                height: 1px;
                margin-left: -17.5%;
                background: #aaaaaa;
            }
            
            .supportList li:after {
                width: 89%;
            }
            
            .numberedList li:last-child:after,
            .supportList li:last-child:after {
                content: '';
                height: 0;
                background: none;
            }
            
            ul.tabs li a,
            ul.tabs li a:visited {
                background: none;
            }
            
            ul.tabs li a:hover,
            ul.tabs li a:focus,
            ul.tabs li a:active,
            ul.tabs li a.active,
            ul.tabs li a.active:visited {
                background: none;
            }
            
            #content .panel-display .slick.slick--slider {
                margin-left: 20px;
                margin-right: 20px;
            }
            
            body.page-home .block-region-content.block-main,
            body.frontpage .block-region-content.block-main {
                padding: 0;
            }
            
            .front h2.block-title {
                text-align: center;
                border-bottom: 0;
                font-size: 30px;
            }
            
            .front #main-content-header {
                display: none;
            }
            
            .admin-menu .admin-menu-position-fixed {
                position: fixed;
                top: 0;
                z-index: 999;
                width: 100%;
            }
            
            #admin-menu,
            #admin-menu .dropdown {
                z-index: 999 !important;
            }
            
            body.admin-menu.adminimal-menu:before {
                height: 112px;
            }
            
            @media only screen and (min-width: 1025px) {
                body.admin-menu.adminimal-menu:before {
                    height: 29px;
                }
            }
            
            .panel-pane.pane-panels-mini.pane-popular-apis .pane-title {
                padding-top: 30px;
                margin-bottom: 0;
            }
            
            .panel-pane.pane-panels-mini.pane-popular-apis {
                padding: 20px 0;
            }
            
            .panel-pane.pane-panels-mini.pane-popular-apis .block-inner {
                margin: 0;
            }
            
            img.site-logo {
                height: 36px;
            }
            
            .hybridauth-widget-wrapper .item-list-hybridauth-widget ul.hybridauth-widget li {
                margin: 1px 3px;
            }
            
            header#header {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 400;
                width: 100%;
            }
            
            .role-administrator header#header,
            .role-content_author header#header,
            .role-forum_moderator header#header,
            .admin-menu header#header {
                top: 28px;
            }
            
            @media screen and (max-width: 1024px) {
                .role-administrator header#header,
                .role-content_author header#header,
                .role-forum_moderator header#header,
                .admin-menu header#header {
                    top: 47px;
                }
            }
            
            .slicknav_menu {
                position: fixed;
                width: 100%;
                z-index: 999 !important;
            }
            
            #columns {
                margin-top: 84px;
            }
            
            .menu-toggle {
                display: none;
            }
            
            @media screen and (min-width: 769px) and (max-width:1024px) {
                h1#site-name {
                    font-size: 2.8em;
                }
                #menu-bar .menu-wrapper li a,
                #menu-bar .menu-wrapper .menu li a {
                    padding: 0 1.2em;
                    font-size: .94em;
                }
                #menu-bar .menu-wrapper li,
                #menu-bar .menu-wrapper .menu li {
                    margin-right: 4px;
                }
                #columns {
                    margin-top: 71px;
                }
                .role-administrator #columns,
                .role-content_author #columns,
                .role-forum_moderator #columns,
                .admin-menu #columns {
                    margin-top: 140px;
                }
            }
            
            @media screen and (min-width: 481px) and (max-width:768px) {
                body {
                    padding: 0;
                }
                h1#site-name {
                    font-size: 2em;
                }
                #menu-bar .menu-wrapper li a,
                #menu-bar .menu-wrapper .menu li a {
                    padding: 0 1em;
                    font-size: .9em;
                }
                #menu-bar .menu-wrapper li,
                #menu-bar .menu-wrapper .menu li {
                    margin-right: 2px;
                }
                #columns {
                    margin-top: 100px;
                }
                .role-administrator #columns,
                .role-content_author #columns,
                .role-forum_moderator #columns,
                .admin-menu #columns {
                    margin-top: 100px;
                }
            }
            
            @media screen and (min-width: 321px) and (max-width:480px) {
                body {
                    padding: 0;
                }
                body.admin-menu {
                    margin-top: 0 !important;
                }
                #admin-menu {
                    display: none;
                }
                #branding,
                .region-header {
                    float: none;
                    margin: 0 0 10px;
                    width: 100%;
                    clear: both;
                    text-align: center;
                    max-width: 100%;
                }
                .region-header .block {
                    clear: both;
                    float: none;
                    margin: 5px auto;
                    max-width: 80%;
                }
                .region-header .block .block-inner {
                    margin: auto;
                }
                h1#site-name {
                    font-size: 1.5em;
                }
                h2#site-slogan {
                    font-size: 0.9em;
                }
                .region-top-menu {
                    height: auto;
                }
                .js #menu-bar nav {
                    display: none;
                }
                .menu-toggle {
                    display: block;
                    float: left;
                    font-size: 1.2em;
                    margin: 0 10px 0 0;
                    padding: 0;
                    text-transform: lowercase;
                }
                .menu-toggle a {
                    padding: 7px 10px 10px;
                    display: block;
                }
                #menu-bar .menu-wrapper {
                    float: none !important;
                }
                #menu-bar .menu-wrapper li a,
                #menu-bar .menu-wrapper .menu li a {
                    display: block;
                    padding: 0 0.5em;
                    -moz-border-radius: 0 !important;
                    -webkit-border-radius: 0 !important;
                    border-radius: 0 !important;
                }
                #menu-bar .menu-wrapper li,
                #menu-bar .menu-wrapper .menu li {
                    display: block;
                    float: none;
                    margin-right: 0;
                }
                #menu-bar .menu-wrapper ul.menu li {
                    margin: 0;
                    padding: 0;
                }
                ul.sf-menu {
                    width: 100%;
                }
                .sf-menu.sf-style-default ul {
                    width: 100% !important;
                }
                #columns {
                    margin-top: 167px;
                }
            }
            
            @media screen and (max-width: 320px) {
                body {
                    padding: 0;
                }
                body.admin-menu {
                    margin-top: 0 !important;
                }
                #admin-menu {
                    display: none;
                }
                #branding,
                .region-header {
                    float: none;
                    margin: 0 0 10px;
                    width: 100%;
                    clear: both;
                    text-align: center;
                    max-width: 100%;
                }
                .region-header .block {
                    clear: both;
                    float: none;
                    margin: 5px auto;
                    max-width: 80%;
                }
                .region-header .block .block-inner {
                    margin: auto;
                }
                h1#site-name {
                    font-size: 1.5em;
                }
                h2#site-slogan {
                    font-size: 0.9em;
                }
                .region-top-menu {
                    height: auto;
                }
                .js #menu-bar nav {
                    display: none;
                }
                .menu-toggle {
                    display: block;
                    float: left;
                    font-size: 1.2em;
                    margin: 0 10px 0 0;
                    padding: 0;
                    text-transform: lowercase;
                }
                .menu-toggle a {
                    padding: 7px 10px 10px;
                    display: block;
                }
                #menu-bar .menu-wrapper {
                    float: none !important;
                }
                #menu-bar .menu-wrapper li a,
                #menu-bar .menu-wrapper .menu li a {
                    display: block;
                    padding: 0 0.5em;
                    -moz-border-radius: 0 !important;
                    -webkit-border-radius: 0 !important;
                    border-radius: 0 !important;
                }
                #menu-bar .menu-wrapper li,
                #menu-bar .menu-wrapper .menu li {
                    display: block;
                    float: none;
                    margin-right: 0;
                }
                #menu-bar .menu-wrapper ul.menu li {
                    margin: 0;
                    padding: 0;
                }
                ul.sf-menu {
                    width: 100%;
                }
                .sf-menu.sf-style-default ul {
                    width: 100% !important;
                }
                #columns {
                    margin-top: 197px;
                }
                .role-administrator #columns,
                .role-content_author #columns,
                .role-forum_moderator #columns,
                .admin-menu #columns {
                    margin-top: 132px;
                }
            }
            
            article.user-profile .field .field-label {
                font-weight: bold;
            }
            
            article.user-profile dt {
                font-size: 1em;
            }
            
            article {
                margin-bottom: 20px;
            }
            
            h1.node-title {
                margin: 0 0 0.18em;
            }
            
            article .submitted {
                color: #666;
                font-size: 0.923em;
                padding: 0 0 0.6em 0;
                position: relative;
            }
            
            article.node-teaser .submitted {
                padding: 0;
            }
            
            article .node-content {
                padding: 1em 0;
            }
            
            article .links {
                font-size: 0.923em;
                text-transform: lowercase;
            }
            
            article .links a,
            article .links a:visited {
                display: inline-block;
                padding: 0.3em 0.8em;
            }
            
            .node header.with-picture {
                height: auto !important;
                min-height: 3.5em;
            }
            
            .node header .user-picture {
                display: inline-block;
                top: 10px;
                vertical-align: middle;
            }
            
            .node header .user-picture img {
                display: block;
                margin: 0;
                height: 45px;
                width: 45px;
            }
            
            .node-content img {
                border: solid 1px #e6e4de;
                padding: 0.5em;
            }
            
            .node header .node-title {
                display: inline-block;
                padding-left: 10px;
            }
            
            article .tags,
            .node-content .field-type-taxonomy-term-reference {
                border-left: solid 1px #e6e4de;
                display: inline;
                font-style: italic;
                margin-left: 0.6em;
                padding: 0 0 0 0.6em;
            }
            
            article .tags .field-label,
            .node-content .field-type-taxonomy-term-reference h2.field-label {
                display: inline;
                font-size: 1em;
                font-weight: normal;
                margin: 0;
            }
            
            .node-content .field-type-taxonomy-term-reference ul,
            .node-content .field-type-taxonomy-term-reference ul li {
                display: inline;
            }
            
            .node-content .field-type-taxonomy-term-reference ul li:after {
                content: ", ";
            }
            
            .node-content .field-type-taxonomy-term-reference ul li:last-child:after {
                content: "";
            }
            
            .node ul.links {
                margin: 0;
                text-transform: lowercase;
            }
            
            .node ul.links li {
                margin: 0;
                padding: 0 .75em 0 0;
            }
            
            .node ul.links li a {
                padding: 0.5em 1em;
                white-space: nowrap;
            }
            
            .node-content .field-type-taxonomy-term-reference {
                border: 0;
                display: block;
                font-style: italic;
                margin-left: 0;
                padding: 0;
            }
            
            .comment {
                border: solid 1px #e6e4de;
                height: auto !important;
                min-height: 80px;
                margin-bottom: 1.5em;
                position: relative;
                padding: 20px;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                border-radius: 3px;
            }
            
            .comment header.with-user-picture {
                padding-left: 50px;
            }
            
            .comment p.submitted {
                font-style: italic;
                margin: 0;
            }
            
            .comment-title-hidden .with-user-picture p.submitted {
                padding-top: 8px;
            }
            
            .comment header .user-picture {
                height: 35px;
                position: absolute;
                width: 35px;
                top: 2px;
            }
            
            .comment header .user-picture img {
                height: 35px;
                width: 35px;
            }
            
            .comment span a.permalink {
                background: url(/bot/public/sites/all/themes/connect_theme/css/images/gray.png) no-repeat;
                display: inline-block;
                font-size: 0.923em;
                height: 20px;
                padding: 0;
                text-indent: -999em;
                width: 24px;
            }
            
            .comment h3 {
                margin: 0;
                padding: 0 0 2px;
            }
            
            .comment p.meta {
                margin-top: 0;
            }
            
            .comment-by-node-author {
                background-color: #f9f8f7;
            }
            
            .comment .links {
                text-align: right;
            }
            
            .user-signature {
                font-size: 0.923em;
            }
            
            .field {
                padding: 0 0 10px 0;
            }
            
            .field.field-type-fivestar {
                padding: 0;
            }
            
            .fivestar-static-item .form-item.form-type-item {
                margin-bottom: 8px;
                margin-top: 12px;
            }
            
            .field .field-label {
                font-size: 1em;
                font-weight: 400;
                line-height: inherit;
                margin: 0;
            }
            
            .field-label-inline .field-label,
            .field-label-inline .field-items {
                display: inline;
            }
            
            .field-type-image figure {
                margin: 10px 0;
            }
            
            .field-type-image figcaption {
                font-size: 0.823em;
                font-style: italic;
                line-height: 1.3;
                padding: 4px 0 0;
            }
            
            table .field-type-image img {
                width: 100%;
                height: auto;
            }
            
            .block {}
            
            .block-title {
                font-size: 1.385em;
                line-height: 1.2;
                margin: 0 0 0.4em 0;
            }
            
            .mini-panel-title {
                margin: 0 10px;
            }
            
            .region-header .block {
                clear: none;
                float: right;
                margin: 0;
            }
            
            body.teaser-mode #block-ibm-apim-app-details-menu {
                padding-bottom: 20px;
                float: right;
            }
            
            body.full-mode #block-ibm-apim-app-details-menu {
                padding-bottom: 10px;
                float: right;
            }
            
            #page>footer .block {
                margin: 0;
            }
            
            #page>footer .block .block-inner {
                padding: 0;
            }
            
            .block ul li {
                margin: 0;
            }
            
            .block .item-list ul {
                margin-left: 15px;
            }
            
            .block-panels_mini .mini-panel-title {
                margin: 0 10px;
            }
            
            #block-system-help .block-inner {
                padding: 0;
                margin: 0;
            }
            
            #dashboard .block ul {
                margin-left: 0;
            }
            
            @media only screen and (min-width: 1025px) {
                #block-search-form.block.block-search.menu-wrapper.menu-bar-wrapper {
                    padding-top: 10px;
                    width: 130px;
                    position: absolute;
                    right: 20px;
                    display: inline-block;
                }
            }
            
            @media only screen and (max-width: 1024px) {
                #block-search-form.block.block-search.menu-wrapper.menu-bar-wrapper {
                    padding-top: 4px;
                    width: 130px;
                    position: absolute;
                    right: 20px;
                    display: inline-block;
                }
            }
            
            .block-search .inner {
                padding-left: 0;
                padding-right: 0;
            }
            
            .region-header .block-search .inner {
                padding: 0;
            }
            
            #search-form input#edit-keys,
            #block-search-form .form-item-search-block-form input {
                float: left;
                font-size: 1em;
                margin-right: 5px;
                width: 62%;
            }
            
            #block-search-form .form-item-search-block-form input {
                width: 100%;
                background: #ffffff url(/bot/public/sites/all/themes/connect_theme/css/images/ic_search_black_24px.svg) no-repeat scroll right center;
            }
            
            #search-form input.form-submit {
                background: url(/bot/public/sites/all/themes/connect_theme/css/images/search-button.png) no-repeat scroll center top transparent;
                border-color: #E4E4E4 #D2D2D2 #B4B4B4;
                cursor: pointer;
                height: 23px;
                margin-left: 0;
                margin-right: 0;
                overflow: hidden;
                padding: 0;
                text-indent: -9999px;
                width: 34px;
            }
            
            #search-block-form input.form-submit:hover,
            #search-block-form input.form-submit:focus,
            #search-form input.form-submit:hover,
            #search-form input.form-submit:focus {
                background-position: center bottom;
            }
            
            .menu-bar-float-left {
                float: left;
                clear: none !important;
                margin-top: 0;
            }
            
            .menu-bar-float-right {
                float: right;
                clear: none !important;
                margin-top: 0;
            }
            
            .dropit {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .dropit .dropit-trigger {
                position: relative;
            }
            
            .dropit .dropit-submenu {
                position: absolute;
                top: 100%;
                right: 0;
                z-index: 1000;
                display: none;
                min-width: 150px;
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .dropit .dropit-open .dropit-submenu {
                display: block;
            }
            
            .dropitmenu ul {
                display: none;
            }
            
            .dropitmenu ul.dropit-submenu {
                background-color: #fff;
                border: 1px solid #b2b2b2;
                padding: 6px 0;
                margin: 3px 0 0 1px;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
                -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
            }
            
            .dropitmenu ul.dropit-submenu a {
                display: block;
                font-size: 1em;
                line-height: 25px;
                color: #7a868e;
                padding: 0 18px;
            }
            
            .dropitmenu ul.dropit-submenu a:hover {
                background: #248fc1;
                color: #fff;
                text-decoration: none;
            }
            
            .dropitmenu ul.dropit-submenu li {
                list-style: none none;
            }
            
            .dropit-icon {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ui/ui-icons_999999_256x240.png);
                width: 16px;
                height: 16px;
                margin-top: 5px;
                vertical-align: top;
            }
            
            ul.dropitmenu a:hover .dropit-icon,
            ul.dropitmenu a:focus .dropit-icon,
            ul.dropitmenu a:active .dropit-icon {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ui/ui-icons_2e83ff_256x240.png);
            }
            
            .banner_block .banner_button {
                padding-top: 40px;
            }
            
            .region-two-50-first .block-inner,
            .region-two-50-second .block-inner {
                padding-bottom: 30px;
                margin-left: 40px;
                margin-right: 40px;
            }
            
            h2.block-title {
                border-bottom: 1px solid #c8c8c8;
            }
            
            #block-ibm-apim-app-details-menu h2.block-title {
                border-bottom: 0;
            }
            
            #menu-bar {
                text-align: center;
            }
            
            #menu-bar .block-menu.menu-wrapper.menu-bar-wrapper {
                display: inline-block;
                text-align: center;
                width: 100%;
                padding: 0 150px;
            }
            
            @media screen and (max-width: 480px) {
                #menu-bar .block-menu.menu-wrapper.menu-bar-wrapper {
                    display: none;
                }
            }
            
            @media screen and (min-width: 481px) {
                #menu-bar .block-menu.menu-wrapper.menu-bar-wrapper {
                    display: inline-block;
                }
            }
            
            #menu-bar #block-system-main-menu.block-menu.menu-wrapper.menu-bar-wrapper ul.menu {
                text-align: center;
            }
            
            #menu-bar #block-system-main-menu.block-menu.menu-wrapper.menu-bar-wrapper li.leaf {
                float: none;
                display: inline-block;
            }
            
            #block-search-form.block-search div.form-actions.form-wrapper {
                display: none;
            }
            
            a {
                text-decoration: none;
                -moz-transition: all 0.2s linear;
                -webkit-transition: all 0.2s linear;
                transition: all 0.2s linear;
            }
            
            a:link {}
            
            a:visited {}
            
            a:hover {}
            
            a:active {}
            
            a.active {}
            
            a:active,
            a:focus {}
            
            ul.menu {
                margin: 0 0 0 15px;
                padding: 0;
            }
            
            .ie6-7 ul.menu {
                padding-left: 15px;
            }
            
            ul.menu li {
                padding: 0;
            }
            
            ul.menu ul {
                margin-left: 15px;
            }
            
            .region-top-menu {
                height: 2.5em;
                margin-bottom: 10px;
            }
            
            .region-top-menu .block {
                margin: 0;
            }
            
            .region-top-menu .block-inner {
                margin: 0 10px;
            }
            
            .region-top-menu ul.menu {
                margin: 0;
                padding: 0;
            }
            
            .region-top-menu ul.menu li {
                float: left;
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .region-top-menu .block a {
                height: 2.5em;
                line-height: 2.5em;
                padding: 0 10px;
            }
            
            #menu-bar,
            #menu-bar .menu-wrapper {
                clear: both;
                margin: 0;
            }
            
            #menu-bar .menu-wrapper ul.menu {
                margin: 0;
            }
            
            #menu-bar .menu-wrapper li,
            #menu-bar .menu-wrapper .menu li,
            #block-menu-login-menu .menu li,
            #block-menu-login-menu li {
                display: inline;
                float: left;
                list-style: none;
                margin-left: 0;
                margin-right: 2px;
            }
            
            #menu-bar .menu-wrapper li a,
            #menu-bar .menu-wrapper .menu li a {
                display: block;
                line-height: 2.5em;
                padding: 0 1em;
                white-space: nowrap;
                font-size: 1.3em;
            }
            
            #block-menu-login-menu li a,
            #block-menu-login-menu .menu li a {
                display: block;
                padding: 2px 1em;
                white-space: nowrap;
            }
            
            #menu-bar .menu-wrapper ul.menu li,
            #block-menu-login-menu ul.menu li {
                padding: 0;
            }
            
            #block-menu-login-menu ul.menu li {
                list-style: none;
                display: inline;
                margin-right: 2px;
            }
            
            #menu-bar .block {
                margin: 0;
                padding: 0;
            }
            
            #menu-bar .block-menu ul.menu ul,
            #block-menu-login-menu.block-menu ul.menu ul {
                display: none;
            }
            
            ul.sf-menu {
                margin-bottom: 0 !important;
            }
            
            ul.sf-menu ul {
                margin: 0;
            }
            
            .sf-vertical,
            .sf-vertical li {
                width: 100%;
            }
            
            .sf-vertical li {}
            
            .sf-vertical li.last {
                border-bottom: none;
            }
            
            .sf-vertical li:hover ul,
            .sf-vertical li.sfHover ul {
                left: 100%;
                top: 0;
                margin: 0;
                padding: 0;
            }
            
            .sf-vertical li a {}
            
            .sf-navbar {
                padding-bottom: 0 !important;
            }
            
            .block .menu li.content {
                padding: 0;
            }
            
            #breadcrumb ol {
                margin: 0;
                padding: 0;
            }
            
            #breadcrumb li {
                list-style: none;
                display: inline;
            }
            
            #breadcrumb {
                font-size: 1.231em;
                margin: 5px 0;
            }
            
            #breadcrumb a,
            #breadcrumb a:visited {
                display: inline-block;
                font-size: 0.846em;
                line-height: 28px;
                margin: 0;
            }
            
            #breadcrumb li.crumb span {
                margin: 0 .25em;
            }
            
            ul.pager {
                clear: both;
                margin: 0;
                text-align: center;
            }
            
            .item-list ul.pager li {
                margin: 0;
            }
            
            ul.pager li {
                background-image: none;
                display: inline;
                list-style-type: none;
                padding: .5em;
            }
            
            ul.pager li.pager-current {
                font-weight: 700;
            }
            
            .block ul.pager li {
                margin: 0;
            }
            
            #skip-link {
                left: 50%;
                margin-left: -6.5em;
                margin-top: 0;
                padding: 0 0.5em;
                position: absolute;
                width: 12em;
                z-index: 50;
            }
            
            #skip-link a,
            #skip-link a:link,
            #skip-link a:visited {
                background: #444;
                background: rgba(0, 0, 0, 0.6);
                color: #fff;
                display: block;
                line-height: 2;
                padding: 0;
                text-align: center;
                text-decoration: none;
                -khtml-border-radius: 0 0 10px 10px;
                -moz-border-radius: 0 0 10px 10px;
                -webkit-border-radius: 0 0 10px 10px;
                border-radius: 0 0 10px 10px;
            }
            
            #skip-link a:hover,
            #skip-link a:active,
            #skip-link a:focus {
                outline: 0;
            }
            
            div#tasks {
                margin-top: 20px;
                margin-bottom: 10px;
                padding: 0;
            }
            
            .not-front.page-node div#tasks {
                margin-top: 0;
            }
            
            ul.tabs {
                display: block;
                padding: 0;
                margin: 0;
                border-bottom: 0;
                border-bottom: solid 1px #e6e4e2;
                border-top: solid 1px #e6e4e2;
            }
            
            ul.tabs li {
                display: inline-block;
                float: left;
                margin: 0 0.2em 0 0;
                padding: 0;
            }
            
            ul.tabs a {
                display: block;
                padding: 0 1em;
                text-decoration: none;
            }
            
            ul.tabs a:hover,
            ul.tabs a:focus,
            ul.tabs a:active,
            .tabs a.active {
                outline: 0;
            }
            
            ul.tabs a.active {
                font-weight: 600;
            }
            
            ul.primary {
                font-size: 1.077em;
                height: 4ex;
                line-height: 4ex;
                margin-top: 1em;
            }
            
            ul.primary li a,
            ul.primary li.active a {
                padding: 0 1em;
                border: 0;
            }
            
            ul.secondary {
                border-top: solid 1px #e6e4e2;
                line-height: 4ex;
                padding: 1em 1em 0 0;
                position: relative;
                margin: 0 0 1em 0;
            }
            
            .secondary a {
                font-size: 0.923em;
                -moz-border-radius: 3px;
                -webkit-border-radius: 3px;
                border-radius: 3px;
            }
            
            ul.action-links {
                display: block;
                margin: 1em 0;
            }
            
            .action-links li {
                display: inline;
                margin: 0 1em 0 0;
            }
            
            .action-links li a {
                background: url(/bot/public/sites/all/themes/connect_theme/css/images/gray.png) no-repeat 0 -198px;
                padding-left: 20px;
            }
            
            .field-type-addthis a,
            .addthis_toolbox a,
            ul.primary li a,
            ul.primary li.active a,
            div.contextual-links-wrapper a,
            .toolbar-toggle-processed {
                -webkit-transition: none;
                -moz-transition: none 0s linear 0s;
                -o-transition: none;
                transition: none;
            }
            
            body,
            .apimInnerContainer {
                background-color: #fefefe;
                color: #444849;
            }
            
            body#tinymce {
                background: none;
            }
            
            .fade:after {
                background: linear-gradient(to right, rgba(255, 255, 255, 0), #fefefe 70%);
            }
            
            body.teaser-mode .columns-inner {}
            
            ul.secondary,
            .section-collapsible,
            .region-highlighted,
            #columns {
                background-color: #ffffff;
            }
            
            #skip-link a,
            ul.tabs li a,
            ul.tabs li a:visited {
                color: #5aaafa;
            }
            
            ul.tabs li a:hover,
            ul.tabs li a:focus,
            ul.tabs li a:active,
            ul.tabs li a.active,
            ul.tabs li a.active:visited {
                color: #000100 !important;
                border-bottom: 2px solid #000100;
            }
            
            a,
            a:visited,
            .myorgAddUserLink h3,
            .plantab .apis h3.ui-accordion-header .apititle,
            .portal .portalApi .testAPILink a,
            .portal .portalApi .testAPILink a:visited {
                color: #5aaafa;
            }
            
            a:hover,
            a:focus,
            a:active,
            .portal .portalApi .testAPILink a:hover,
            .portal .portalApi .testAPILink a:focus,
            .portal .portalApi .testAPILink a:active {
                color: #5aaafa;
            }
            
            a.active {
                color: #5aaafa !important;
            }
            
            .pager a:hover,
            .pager a:active,
            .pager a:focus {
                background-color: #5aaafa;
                color: #fff;
            }
            
            h3.apimSummaryTitle,
            .embedded h4.apimSummaryTitle,
            .productTeaser .ui-accordion h3,
            .applicationTeaser .ui-accordion h3,
            .apiTeaser .ui-accordion h3,
            .embedded h4.apimSummaryTitle span.apimTitle a,
            .productAPILink a {
                color: #5aaafa;
            }
            
            .productAPILink .apiVersionText {
                color: #767676;
            }
            
            .plansection .planintro {
                color: #767676;
            }
            
            h1#site-name a,
            h1#site-name a:visited {
                color: #fffeff;
            }
            
            h2#site-slogan {
                color: #feffff;
            }
            
            .region-header,
            .nav .block-menu,
            .region-header h2.block-title,
            .nav .block-menu h2.block-title {
                color: #101000;
            }
            
            .region-header a,
            .region-header a:visited {
                color: #bac0c6;
            }
            
            .region-header a:hover,
            .region-header a:focus,
            .region-header a:active {
                color: #39a6ff !important;
            }
            
            .pagebreadcrumb {
                color: #010101;
            }
            
            #page>footer,
            #page>footer .block-title {
                background-color: #f1f5f6;
                color: #010101;
            }
            
            .pagebreadcrumb a,
            #page>footer a,
            #page>footer a:visited {
                color: #5aaafa;
            }
            
            .pagebreadcrumb a:hover,
            .pagebreadcrumb a:focus,
            .pagebreadcrumb a:active,
            #page>footer a:hover,
            #page>footer a:focus,
            #page>footer a:active {
                color: #5aaafa;
            }
            
            .portal .explanationText {
                color: #656565;
            }
            
            .singleOrg {
                color: #bac0c6;
            }
            
            .menu-toggle a {
                color: #656565;
            }
            
            #menu-bar-wrapper {
                background: transparent;
            }
            
            .nav .block-menu ul li a {
                color: #656565;
                opacity: 0.95;
            }
            
            .nav .block-menu ul a:focus,
            .nav .block-menu ul a:hover,
            .nav .block-menu ul a:active {
                color: #007ded;
                opacity: 0.6;
                text-decoration: underline;
            }
            
            .nav .block-menu ul li a.active {
                color: #007ded;
            }
            
            .sf-menu.sf-style-default a {
                border: 0;
                color: #111111;
                background-color: #5d9dd0;
            }
            
            .sf-menu.sf-style-default li.last a {}
            
            .sf-menu.sf-style-default a,
            .sf-menu.sf-style-default a:visited {
                color: #111111;
            }
            
            .sf-menu.sf-style-default span.sf-description {
                color: #111111;
            }
            
            .sf-menu.sf-style-default li li,
            .sf-menu.sf-style-default.sf-navbar li ul {
                background-color: #2e2e2d;
            }
            
            .sf-menu.sf-style-default li li li {
                background-color: #ededed;
            }
            
            .sf-menu.sf-style-default li {
                background: transparent;
            }
            
            .sf-menu.sf-style-default.sf-navbar {
                background: #ededed;
            }
            
            .sf-menu.sf-style-default li a,
            .sf-menu.sf-style-default li a:visited {
                color: #111111;
            }
            
            .sf-menu.sf-style-default li:hover,
            .sf-menu.sf-style-default li.sfHover,
            .sf-menu.sf-style-default a:focus,
            .sf-menu.sf-style-default a:hover,
            .sf-menu.sf-style-default a:active {
                background-color: #ffffff;
                color: #111111;
            }
            
            .sf-menu.sf-style-default li li:hover,
            .sf-menu.sf-style-default li li.sfHover,
            .sf-menu.sf-style-default li li a:focus,
            .sf-menu.sf-style-default li li a:hover,
            .sf-menu.sf-style-default li li a:active {
                background-color: #111111;
                color: #ffffff;
            }
            
            .sf-menu.sf-style-default .active-trail.sf-depth-1,
            .sf-menu.sf-style-default .sf-depth-1>a.active {
                color: #111111;
                background-color: #ffffff;
            }
            
            #menu-bar-wrapper .sf-menu.sf-style-default .active-trail.sf-depth-1,
            #menu-bar-wrapper .sf-menu.sf-style-default .sf-depth-1>a.active {
                background-color: #ffffff;
            }
            
            .sf-navbar.sf-style-default li ul {
                background-color: transparent !important;
                width: 100%;
            }
            
            .sf-navbar>li>ul>li {
                border-bottom: 1px solid #473e34;
            }
            
            .sf-menu.sf-style-default.sf-navbar li ul li ul {
                background-color: transparent;
            }
            
            @media only screen and (max-width: 480px) {
                .sf-menu.sf-style-default li li:hover,
                .sf-menu.sf-style-default li li.sfHover,
                .sf-menu.sf-style-default li li a,
                .sf-menu.sf-style-default li li a:focus,
                .sf-menu.sf-style-default li li a:hover,
                .sf-menu.sf-style-default li li a:active,
                .sf-menu.sf-style-default li li a:visited {
                    background-color: #111111;
                    color: #5d9dd0;
                }
            }
            
            #page>header {
                background-color: #5a6175;
            }
            
            body.not-front #page>header {
                border-bottom: 1px solid #656565;
            }
            
            body.page-home #columns.no-menu-bar,
            body.frontpage #columns.no-menu-bar {
                background-color: #f0f4f5;
            }
            
            .region-top-menu {
                background-color: #ffffff;
            }
            
            .region-top-menu a {
                color: #111111;
            }
            
            .region-top-menu .sf-menu.sf-style-default>li>a {
                border: 0;
                color: #111111;
                background-color: transparent;
            }
            
            #menu-bar {
                background-color: #f2f2f2;
                border-bottom: 1px solid #dfdfe6;
            }
            
            h1,
            .front h2.block-title {
                color: #6a6a6a;
            }
            
            .comment header h3 a,
            h1 a,
            h1.node-title a,
            h2 {
                color: #100011;
            }
            
            input,
            textarea {
                background-color: #fffffe;
                color: #444849;
            }
            
            textarea:disabled,
            input:disabled {
                background-color: #ebebe4;
            }
            
            .portal .label,
            .apimUpdated,
            .apimField,
            .apiDocTitle,
            .portal .sectionHeader {
                color: #656565;
            }
            
            .apimSummaryDescription,
            .portal .explanationText,
            .summaryText,
            .form-item .description {
                color: #333333;
            }
            
            .portal .highlightText {
                color: #295a46;
            }
            
            .border,
            .section,
            .resourceView.resourcePlanView,
            .resourceHeadline,
            .planSelector,
            .apimSummary,
            .apimTitleContainer .displayInlineTop.planName,
            .plan .authInfo,
            .swagger-section,
            input.toggle-password,
            input.clientSecretInput,
            div.credentialDelete,
            div.credentialTitle .addCredentials {
                border-color: #dddddd !important;
            }
            
            .apimSummary {
                border-bottom: 1px solid #dddddd;
            }
            
            .node-product.node-teaser .apimSummary,
            .node-application.node-teaser .apimSummary,
            .node-api.node-teaser .apimSummary {
                border: 1px solid #dddddd;
            }
            
            .forum-table-wrap .forum-table-superheader {
                background-color: #f2f2f2;
                border-color: #f2f2f2;
            }
            
            .apimMainContent .appPlanName {
                background-color: #f5f5f5;
            }
            
            .apiPlanSummary.apimMainContent .appPlanName {
                background: inherit;
            }
            
            .apiPlanSummary .planSubscribe a,
            .apiPlanSummary .planSubscribe a:link,
            .apiPlanSummary .planSubscribe a:visited,
            .apimPlansApis .ui-accordion-header .testAPILink a,
            .apimPlansApis .ui-accordion-header .testAPILink a:link,
            .apimPlansApis .ui-accordion-header .testAPILink a:visited {
                color: #5aaafa;
            }
            
            .apiPlanSummary .planSubscribe a:hover,
            .apiPlanSummary .planSubscribe a:focus,
            .apiPlanSummary .planSubscribe a:active,
            .apimPlansApis .ui-accordion-header .testAPILink a:hover,
            .apimPlansApis .ui-accordion-header .testAPILink a:focus,
            .apimPlansApis .ui-accordion-header .testAPILink a:active {
                text-decoration: underline;
                color: #5aaafa;
            }
            
            .portal .apiPlanSummary .portalApi .resourceDesc,
            .portal .apiPlanSummary .portalApi .planHeader {
                color: #767676;
            }
            
            .apiPlanSummary .ui-accordion h3.ui-accordion-header.ui-state-default {
                background-color: #eeeeee;
                border: 1px solid #dddddd;
            }
            
            .apiPlanSummary .ui-accordion h3.ui-accordion-header.ui-state-active {
                background: inherit;
                border: 1px solid #dddddd;
            }
            
            .apiPlanSummary .ui-accordion .portalApi.animateMaxHeight {
                border: 1px solid #dddddd;
                border-top: 0;
            }
            
            button,
            input[type="submit"],
            input.form-submit,
            .form-actions a,
            .form-actions a:visited,
            .button,
            a.button,
            a.button:visited,
            .banner_block .banner_button a,
            a.buttonLink,
            .portal .migratePlanContainer .migrateButton a,
            .numberedList a,
            .supportList a {
                color: #5596e6;
                background-color: #ffffff;
                border: 1px solid #5596e6;
            }
            
            button:disabled,
            input.form-submit:disabled,
            input[type="submit"]:disabled {
                background-color: #ebebe4;
            }
            
            .numberedList li:before {
                border: 1px solid #444849;
            }
            
            .hl-l #branding {
                float: left;
                margin: 0 20px;
            }
            
            .hl-l .region-header {
                float: right;
                margin: 0 10px;
            }
            
            .hl-l .region-header .block {
                display: inline;
                clear: none;
                margin-bottom: 0;
            }
            
            .hl-l #logo {
                padding: 0 20px 7px 3px;
            }
            
            .hl-r #branding {
                float: right;
                margin: 0 20px;
            }
            
            .hl-r .region-header {
                float: left;
                margin: 0 10px;
            }
            
            .hl-r .region-header .block {
                display: inline;
                clear: none;
                margin-bottom: 0;
            }
            
            .hl-r #logo {
                padding: 0 3px 7px 20px;
            }
            
            div .footer {
                text-align: center;
            }
            
            .footer .centered_link {
                margin: auto;
                padding: 0 20px;
            }
            
            .hl-c #branding {
                float: none;
                margin: auto;
                text-align: center;
            }
            
            .hl-c .region-header {
                display: table;
                float: none;
                margin: 15px auto 0;
                text-align: center;
            }
            
            .hl-c .region-header .block {
                margin: auto;
                display: inline;
                text-align: left;
                clear: none;
            }
            
            .hl-c .region-header .block-inner {
                margin: 0 20px;
            }
            
            .hl-c #logo {
                padding: 0 0 10px 0;
            }
            
            .ia-l .field-type-image figure,
            .iat-l .field-type-image figure {
                margin: 18px 20px 0 0;
            }
            
            .ia-l .field-type-image figcaption,
            .iat-l .field-type-image figcaption {
                margin: 5px 0;
            }
            
            .ia-r .field-type-image figure,
            .iat-r .field-type-image figure {
                margin: 18px 0 0 20px;
            }
            
            .ia-r .field-type-image figcaption,
            .iat-r .field-type-image figcaption {
                margin: 5px 0;
            }
            
            .ia-c .field-type-image figure,
            .ia-n .field-type-image figure,
            .iat-c .field-type-image figure,
            .iat-n .field-type-image figure {
                border: none;
                padding: 10px 0;
            }
            
            .field-type-image.field-label-above {
                margin-top: 0;
            }
            
            .field-type-image .field-label {
                margin-bottom: 0.5em;
            }
            
            .field-type-image.field-label-inline .field-label {
                margin-bottom: 0;
                line-height: 1;
            }
            
            body .image-left,
            body div.image-left,
            body div.image-left .field-type-image {
                float: left;
                margin: 4px 15px 0 0;
                text-align: left;
            }
            
            body .image-left img,
            body div.image-left img,
            body div.image-left .field-type-image img {
                text-align: left;
                margin: 0;
            }
            
            body .image-right,
            body div.image-right,
            body div.image-right .field-type-image {
                float: right;
                margin: 4px 0 0 15px;
                text-align: right;
            }
            
            body .image-right img,
            body div.image-right img,
            body div.image-right .field-type-image img {
                text-align: right;
                margin: 0;
            }
            
            body .image-center,
            body .image-center img,
            body div.image-center,
            body div.image-center .field-type-image {
                text-align: center;
            }
            
            body .image-center,
            body div.image-center,
            body div.image-center .field-type-image img {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
            }
            
            form.node-form div.field-type-image {
                text-align: left !important;
            }
            
            form.node-form div.field-type-image {
                float: none !important;
                margin: 0 !important;
            }
            
            form.node-form div.field-type-image img {
                text-align: left !important;
                display: inline !important;
                margin: 0 !important;
            }
            
            .bb-h {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/hatch.png);
            }
            
            .bb-vl {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/line-vert.png);
            }
            
            .bb-hl {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/line-horiz.png);
            }
            
            .bb-g {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/grid.png);
            }
            
            .bb-d {
                background-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/dots.png);
            }
            
            .sc-n #page .content-style {
                -webkit-box-shadow: 0 0 0 transparent;
                -moz-box-shadow: 0 0 0 transparent;
                box-shadow: 0 0 0 transparent;
            }
            
            .bs-l #page .content-style {
                -webkit-box-shadow: 0 0 10px rgba(76, 76, 76, 0.7);
                -moz-box-shadow: 0 0 10px rgba(76, 76, 76, 0.7);
                box-shadow: 0 0 10px rgba(76, 76, 76, 0.7);
            }
            
            .bs-d #page .content-style {
                -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
                -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
            }
            
            .mb-n ul.menu {
                padding: 0;
            }
            
            .mb-n ul li.leaf,
            .mb-n ul li.collapsed,
            .mb-n ul li.expanded {
                list-style: none;
                padding: 0;
            }
            
            .mb-ah ul.menu {
                padding: 0 0 0 0.5em;
            }
            
            .mb-ah ul li.leaf,
            .mb-ah ul li.collapsed,
            .mb-ah ul li.expanded {
                list-style-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/arrow-head.png);
            }
            
            .mb-ad ul.menu {
                padding: 0 0 0 0.6em;
            }
            
            .mb-ad ul li.leaf,
            .mb-ad ul li.collapsed,
            .mb-ad ul li.expanded {
                list-style-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/arrow-double.png);
            }
            
            .mb-ca ul.menu {
                padding: 0 0 0 1em;
            }
            
            .mb-ca ul li.leaf,
            .mb-ca ul li.collapsed,
            .mb-ca ul li.expanded {
                list-style-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/arrow-circle.png);
            }
            
            .mb-fa ul.menu {
                padding: 0 0 0 1em;
            }
            
            .mb-fa ul li.leaf,
            .mb-fa ul li.collapsed,
            .mb-fa ul li.expanded {
                list-style-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/arrow-fat.png);
            }
            
            .mb-sa ul.menu {
                padding: 0 0 0 1em;
            }
            
            .mb-sa ul li.leaf,
            .mb-sa ul li.collapsed,
            .mb-sa ul li.expanded {
                list-style-image: url(/bot/public/sites/all/themes/connect_theme/css/images/ts/arrow-skinny.png);
            }
            
            .region-top-menu ul.menu li.leaf,
            .region-top-menu ul.menu li.collapsed,
            .region-top-menu ul.menu li.expanded {
                list-style-image: none;
            }
            
            .rc-4 #columns {
                -moz-border-radius: 0 4px 4px 4px;
                -webkit-border-radius: 0 4px 4px 4px;
                border-radius: 0 4px 4px 4px;
            }
            
            .rc-4 #page>footer,
            .rc-4 .region-top-menu {
                -moz-border-radius: 0 0 4px 4px;
                -webkit-border-radius: 0 0 4px 4px;
                border-radius: 0 0 4px 4px;
            }
            
            .rc-6 #columns {
                -moz-border-radius: 0 6px 6px 6px;
                -webkit-border-radius: 0 6px 6px 6px;
                border-radius: 0 6px 6px 6px;
            }
            
            .rc-6 #page>footer,
            .rc-6 .region-top-menu {
                -moz-border-radius: 0 0 6px 6px;
                -webkit-border-radius: 0 0 6px 6px;
                border-radius: 0 0 6px 6px;
            }
            
            .rc-8 #columns {
                -moz-border-radius: 0 8px 8px 8px;
                -webkit-border-radius: 0 8px 8px 8px;
                border-radius: 0 8px 8px 8px;
            }
            
            .rc-8 #page>footer,
            .rc-8 .region-top-menu {
                -moz-border-radius: 0 0 8px 8px;
                -webkit-border-radius: 0 0 8px 8px;
                border-radius: 0 0 8px 8px;
            }
            
            .rc-10 #columns {
                -moz-border-radius: 0 10px 10px 10px;
                -webkit-border-radius: 0 10px 10px 10px;
                border-radius: 0 10px 10px 10px;
            }
            
            .rc-10 #page>footer,
            .rc-10 .region-top-menu {
                -moz-border-radius: 0 0 10px 10px;
                -webkit-border-radius: 0 0 10px 10px;
                border-radius: 0 0 10px 10px;
            }
            
            .rc-12 #columns {
                -moz-border-radius: 0 12px 12px 12px;
                -webkit-border-radius: 0 12px 12px 12px;
                border-radius: 0 12px 12px 12px;
            }
            
            .rc-12 #page>footer,
            .rc-12 .region-top-menu {
                -moz-border-radius: 0 0 12px 12px;
                -webkit-border-radius: 0 0 12px 12px;
                border-radius: 0 0 12px 12px;
            }
            
            .rc-4 .with-footer #columns,
            .rc-6 .with-footer #columns,
            .rc-8 .with-footer #columns,
            .rc-10 .with-footer #columns,
            .rc-12 .with-footer #columns {
                -moz-border-radius-bottomright: 0;
                -moz-border-radius-bottomleft: 0;
                -webkit-border-bottom-right-radius: 0;
                -webkit-border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
            }
            
            .rct-4 input.form-button,
            .rct-4 input.form-submit,
            .rct-4 input.form-text,
            .rct-4 select[multiple="multiple"],
            .rct-4 button,
            .rct-4 input[type="submit"],
            .rct-4 input.form-submit,
            .rct-4 .form-actions a,
            .rct-4 .form-actions a:visited,
            .rct-4 .button,
            .rct-4 a.button,
            .rct-4 a.button:visited,
            .rct-4 .banner_block .banner_button a,
            .rct-4 a.buttonLink,
            .rct-4 .portal .migratePlanContainer .migrateButton a,
            .rct-4 .numberedList a,
            .rct-4 .supportList a {
                -moz-border-radius: 4px;
                -webkit-border-radius: 4px;
                border-radius: 4px;
            }
            
            .rct-6 input.form-button,
            .rct-6 input.form-submit,
            .rct-6 input.form-text,
            .rct-6 select[multiple="multiple"],
            .rct-6 button,
            .rct-6 input[type="submit"],
            .rct-6 input.form-submit,
            .rct-6 .form-actions a,
            .rct-6 .form-actions a:visited,
            .rct-6 .button,
            .rct-6 a.button,
            .rct-6 a.button:visited,
            .rct-6 .banner_block .banner_button a,
            .rct-6 a.buttonLink,
            .rct-6 .portal .migratePlanContainer .migrateButton a,
            .rct-6 .numberedList a,
            .rct-6 .supportList a {
                -moz-border-radius: 6px;
                -webkit-border-radius: 6px;
                border-radius: 6px;
            }
            
            .rct-8 input.form-button,
            .rct-8 input.form-submit,
            .rct-8 input.form-text,
            .rct-8 select[multiple="multiple"],
            .rct-8 button,
            .rct-8 input[type="submit"],
            .rct-8 input.form-submit,
            .rct-8 .form-actions a,
            .rct-8 .form-actions a:visited,
            .rct-8 .button,
            .rct-8 a.button,
            .rct-8 a.button:visited,
            .rct-8 .banner_block .banner_button a,
            .rct-8 a.buttonLink,
            .rct-8 .portal .migratePlanContainer .migrateButton a,
            .rct-8 .numberedList a,
            .rct-8 .supportList a {
                -moz-border-radius: 8px;
                -webkit-border-radius: 8px;
                border-radius: 8px;
            }
            
            .rct-10 input.form-button,
            .rct-10 input.form-submit,
            .rct-10 input.form-text,
            .rct-10 select[multiple="multiple"],
            .rct-10 button,
            .rct-10 input[type="submit"],
            .rct-10 input.form-submit,
            .rct-10 .form-actions a,
            .rct-10 .form-actions a:visited,
            .rct-10 .button,
            .rct-10 a.button,
            .rct-10 a.button:visited,
            .rct-10 .banner_block .banner_button a,
            .rct-10 a.buttonLink,
            .rct-10 .portal .migratePlanContainer .migrateButton a,
            .rct-10 .numberedList a,
            .rct-10 .supportList a {
                -moz-border-radius: 10px;
                -webkit-border-radius: 10px;
                border-radius: 10px;
            }
            
            .rct-12 input.form-button,
            .rct-12 input.form-submit,
            .rct-12 input.form-text,
            .rct-12 select[multiple="multiple"],
            .rct-12 button,
            .rct-12 input[type="submit"],
            .rct-12 input.form-submit,
            .rct-12 .form-actions a,
            .rct-12 .form-actions a:visited,
            .rct-12 .button,
            .rct-12 a.button,
            .rct-12 a.button:visited,
            .rct-12 .banner_block .banner_button a,
            .rct-12 a.buttonLink,
            .rct-12 .portal .migratePlanContainer .migrateButton a,
            .rct-12 .numberedList a,
            .rct-12 .supportList a {
                -moz-border-radius: 12px;
                -webkit-border-radius: 12px;
                border-radius: 12px;
            }
            
            .rct-6 #menu-bar .menu-toggle a,
            .rct-4 #menu-bar .menu-wrapper>ul>li,
            .rct-4 #menu-bar .menu-wrapper>ul>li>a,
            .rct-4 .region-header .block-content>ul>li,
            .rct-4 .region-header .block-content>ul>li>a {
                -moz-border-radius: 4px 4px 0 0;
                -webkit-border-radius: 4px 4px 0 0;
                border-radius: 4px 4px 0 0;
            }
            
            .rct-6 #menu-bar .menu-toggle a,
            .rct-6 #menu-bar .menu-wrapper>ul>li,
            .rct-6 #menu-bar .menu-wrapper>ul>li>a,
            .rct-6 .region-header .block-content>ul>li,
            .rct-6 .region-header .block-content>ul>li>a {
                -moz-border-radius: 6px 6px 0 0;
                -webkit-border-radius: 6px 6px 0 0;
                border-radius: 6px 6px 0 0;
            }
            
            .rct-6 #menu-bar .menu-toggle a,
            .rct-8 #menu-bar .menu-wrapper>ul>li,
            .rct-8 #menu-bar .menu-wrapper>ul>li>a,
            .rct-8 .region-header .block-content>ul>li,
            .rct-8 .region-header .block-content>ul>li>a {
                -moz-border-radius: 8px 8px 0 0;
                -webkit-border-radius: 8px 8px 0 0;
                border-radius: 8px 8px 0 0;
            }
            
            .rct-6 #menu-bar .menu-toggle a,
            .rct-10 #menu-bar .menu-wrapper>ul>li,
            .rct-10 #menu-bar .menu-wrapper>ul>li>a,
            .rct-10 .region-header .block-content>ul>li,
            .rct-10 .region-header .block-content>ul>li>a {
                -moz-border-radius: 10px 10px 0 0;
                -webkit-border-radius: 10px 10px 0 0;
                border-radius: 10px 10px 0 0;
            }
            
            .rct-6 #menu-bar .menu-toggle a,
            .rct-12 #menu-bar .menu-wrapper>ul>li,
            .rct-12 #menu-bar .menu-wrapper>ul>li>a,
            .rct-12 .region-header .block-content>ul>li,
            .rct-12 .region-header .block-content>ul>li>a {
                -moz-border-radius: 12px 12px 0 0;
                -webkit-border-radius: 12px 12px 0 0;
                border-radius: 12px 12px 0 0;
            }
            
            .mbp-c #menu-bar .menu-wrapper {
                display: table;
                margin: 0 auto;
                text-align: center;
            }
            
            .mbp-c #menu-bar .menu-wrapper ul {
                text-align: left;
            }
            
            .mbp-c #menu-bar .menu-wrapper li,
            .mbp-c #menu-bar .menu-wrapper .menu li {
                margin-left: 0.3em;
                margin-right: 0.3em;
            }
            
            .mbp-r #menu-bar .menu-wrapper {
                float: right;
            }
            
            .mbp-r #menu-bar .menu-wrapper li,
            .mbp-r #menu-bar .menu-wrapper .menu li {
                margin-left: 0.6em;
                margin-right: 0;
            }
            
            .ie6-7 .mbp-c #menu-bar .menu-wrapper ul {
                float: left;
                position: relative;
                left: 50%;
            }
            
            .ie6-7 .mbp-c #menu-bar .menu-wrapper .sf-menu ul li {
                left: 0;
            }
            
            .ie6-7 .mbp-c #menu-bar .menu-wrapper .sf-menu li {
                left: -50%;
            }
            
            #page>header {
                background-color: #f5f5f5;
                padding-top: 5px;
            }
            
            #menu-bar {
                background-color: #f5f5f5;
            }
            
            .botribbon_blank {
                background: #f5f5f5 url(/bot/public/sites/bot.public.apiportal.bot.or.th/themes/bot_v3_theme/images/guilloche_pattern.png) no-repeat center top;
                width: 100%;
                height: 30px;
                margin-bottom: 5px;
                margin: 0 auto;
                margin-top: 5px;
            }
            
            img.site-logo {
                height: 67px;
                margin-left: 40px;
            }
            
            #botapi_introduction {
                background: #f5f5f5 url(/bot/public/sites/bot.public.apiportal.bot.or.th/themes/bot_v3_theme/images/BOTAPI_Figure_TH.png) no-repeat center top;
                width: 100%;
                max-height: 300px;
                height: 300px;
            }
            
            body.page-home #columns.no-menu-bar {
                background-color: #fff;
            }
            
            .region-header a,
            .region-header a:visited {
                font-weight: bold;
            }
            
            div.legal-terms>ol {
                margin-left: 20px;
            }
            
            .node-type-product #page>#columns,
            .node-type-application #page>#columns,
            .node-type-api #page>#columns {
                margin-left: 250px;
            }
            
            .mesh-portal-product .toc {
                width: 250px;
            }
            
            #page>footer {
                background-color: #003865;
                padding-top: 15px;
                padding-bottom: 15px;
                clear: both;
            }
            
            #copyrights-bot {
                font-family: Arial;
                font-size: 11px;
                color: #A3AFBD;
                padding: 0;
                padding-left: 10px;
                padding-right: 10px;
                margin-top: 4px;
            }
        </style>
        <div class="columns-inner clearfix">
            <div id="content-column">
                <div class="content-inner">
                    <section id="main-content" role="main">
                        <header id="main-content-header">
                            <h1 id="page-title">Getting started</h1>
                        </header>
                        <!-- region: Main Content -->
                        <div id="content">
                            <div id="block-system-main" class="block block-system no-title odd first last block-count-5 block-region-content block-main">
                                <article id="node-1" class="node node-page node-content-1 article odd node-full ia-n clearfix" about="/bot/public/start" typeof="foaf:Document" role="article">
                                    <header class="node-header"></header>
                                    <span property="dc:title" content="Getting started" class="rdf-meta element-hidden"></span>
                                    <div class="node-content">
                                        <div class="field field-name-body field-type-text-with-summary field-label-hidden view-mode-full">
                                            <div class="field-items">
                                                <div class="field-item even" property="content:encoded">
                                                    <ol class="numberedList">
                                                        <li>
                                                            <h3>Browse the available APIs</h3>
                                                            <p>Take a look at our APIs to see what choices are available. Is there an API you can exploit in one of your applications? Use the supplied APIs to quickly construct a fully featured application.</p>
                                                            <p><a href="/bot/public/products">Explore our APIs</a></p>
                                                        </li>
                                                        <li>
                                                            <h3>Sign Up</h3>
                                                            <p>Found an API? Sign up now to create an account and get started. It is free to join.</p>
                                                            <p><a href="/bot/public/user/register">Create an account</a></p>
                                                        </li>
                                                        <li>
                                                            <h3>Register an application</h3>
                                                            <p>Before you can use an API you have to register your application. When you register an application, the application is assigned a unique client ID and client secret. You must use the client ID when you
                                                                call an API that requires you to identify your application by using a client ID, or a client ID and client secret. Check the API description for the details.</p>
                                                        </li>
                                                        <li>
                                                            <h3>Select a plan</h3>
                                                            <p>Finally, now that your application is registered, you need to subscribe to a plan. The plan determines the number of API calls that your application can make. Some plans are free and no approval is required,
                                                                some require approval, and some require approval and a monthly subscription. Think about what you need and choose the most suitable plan.</p>
                                                        </li>
                                                    </ol>
                                                    <p>All done! You are signed up, registered, and ready to go.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        
        
        </html>
    `;
    }
}

// Define the custom element
customElements.define('getstart-bar', CustomFooter);