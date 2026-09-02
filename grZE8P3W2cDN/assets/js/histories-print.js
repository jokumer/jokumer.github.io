(function () {
    'use strict';

    function firstContentParagraph(container) {
        var paragraphs = container.querySelectorAll('p');
        for (var i = 0; i < paragraphs.length; i++) {
            var p = paragraphs[i];
            if (p.querySelector('img') || p.querySelector('a')) {
                continue;
            }
            if (p.textContent.trim().length < 80) {
                continue;
            }
            return p;
        }
        return null;
    }

    function buildPrintBox() {
        var main = document.querySelector('.col-md-12');
        if (!main) {
            return;
        }

        var heading = main.querySelector('h1');
        var image = main.querySelector('img');
        var paragraph = firstContentParagraph(main);
        var qr = document.getElementById('print-qr');

        var box = document.createElement('section');
        box.className = 'print-box';

        if (heading) {
            box.appendChild(heading.cloneNode(true));
        }

        if (image) {
            var imageClone = image.cloneNode(true);
            imageClone.className = 'hist-img';
            box.appendChild(imageClone);
        }

        if (paragraph) {
            box.appendChild(paragraph.cloneNode(true));
        }

        if (qr) {
            var qrClone = qr.cloneNode(true);
            qrClone.className = 'qrcode';
            box.appendChild(qrClone);
        }

        if (box.childNodes.length) {
            document.body.appendChild(box);
        }
    }

    function build() {
        if (document.getElementById('print-box')) {
            return;
        }
        buildPrintBox();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
        window.setTimeout(build, 1500);
    } else {
        build();
    }
})();