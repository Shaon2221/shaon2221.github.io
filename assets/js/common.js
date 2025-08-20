$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

        // Populate GitHub stars on project cards if elements are present
        $("[id$='-stars']").each(function() {
                var el = $(this);
                var id = el.attr('id');
                // Expect id like `${slug}-stars` and a data-repo attribute on parent container
                // If not provided, try to infer from sibling anchor href
                var container = el.closest('.github-icon');
                var repoHref = container.find('a[href*="github.com/"]').attr('href');
                if (!repoHref) return; // Nothing to do
                try {
                        var parts = repoHref.split('github.com/')[1].split('/');
                        var owner = parts[0];
                        var repo = parts[1];
                        if (!owner || !repo) return;
                        fetch(`https://api.github.com/repos/${owner}/${repo}`)
                            .then(r => r.ok ? r.json() : null)
                            .then(data => {
                                if (data && typeof data.stargazers_count === 'number') {
                                    el.text(data.stargazers_count.toLocaleString());
                                }
                            })
                            .catch(() => {});
                } catch (e) { /* ignore */ }
        });
});
