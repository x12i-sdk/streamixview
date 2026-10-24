import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { writeFile } from 'node:fs/promises';
async function savePreview(markup) {
  assert(markup.length > 0);
  await writeFile('preview.html', '<!doctype html><html lang="en"><meta charset="utf-8"><title>Package UI fixture</title><body>' + markup + '</body></html>');
  console.log('Generated preview.html (' + markup.length + ' characters).');
}
import { ActivityList } from '@x12i/streamixview';
const markup = renderToStaticMarkup(React.createElement(ActivityList, {
  title: 'Example activity', countLabel: '1 item', query: '', searchLabel: 'Search activities', emptyTitle: 'No activity', emptyText: 'No matching fixtures',
  rows: [{ id: 'activity-1', who: 'Example team', title: 'Report ready', preview: 'The local fixture report is ready.', occurredAt: '2026-01-01T00:00:00Z', unread: true, attachments: 0, selected: false }],
  onQuery() {}, onOpen() {},
}));
assert(markup.includes('Report ready'));
assert(markup.includes('Example team'));
await savePreview(markup);
