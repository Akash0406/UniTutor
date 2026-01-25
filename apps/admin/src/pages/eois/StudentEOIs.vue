<script setup>
import { ref } from "vue";
import PageShell from "../../components/common/PageShell.vue";
import EoiTable from "../../components/eois/EoiTable.vue";
import EoiDetailDrawer from "../../components/eois/EoiDetailDrawer.vue";
import { fetchEoiPage, updateEoiAdminFields } from "../../services/eoi.service";

const COLLECTION = "studentEOIs";

const items = ref([]);
const loading = ref(false);

const cursors = ref([]);
const lastDoc = ref(null);

const drawerOpen = ref(false);
const selected = ref(null);
const saving = ref(false);

const pageSize = 10;

const canPrev = () => cursors.value.length > 0;
const canNext = () => !!lastDoc.value && items.value.length === pageSize;

async function loadFirst() {
  loading.value = true;
  try {
    const res = await fetchEoiPage({ collectionName: COLLECTION, pageSize });
    items.value = res.items;
    lastDoc.value = res.lastDoc;
    cursors.value = [];
  } finally {
    loading.value = false;
  }
}

async function nextPage() {
  if (!lastDoc.value) return;
  loading.value = true;
  try {
    cursors.value.push(lastDoc.value);

    const res = await fetchEoiPage({
      collectionName: COLLECTION,
      pageSize,
      cursor: lastDoc.value,
    });

    items.value = res.items;
    lastDoc.value = res.lastDoc;
  } finally {
    loading.value = false;
  }
}

async function prevPage() {
  if (cursors.value.length === 0) return;
  loading.value = true;
  try {
    const targetIndex = Math.max(0, cursors.value.length - 2);
    const startCursor = targetIndex >= 0 ? cursors.value[targetIndex] : null;
    cursors.value = cursors.value.slice(0, targetIndex + 1);

    const res = await fetchEoiPage({
      collectionName: COLLECTION,
      pageSize,
      cursor: startCursor,
    });

    items.value = res.items;
    lastDoc.value = res.lastDoc;
  } finally {
    loading.value = false;
  }
}

function openDrawer(row) {
  selected.value = row;
  drawerOpen.value = true;
}

async function saveDrawer(patch) {
  if (!selected.value?.id) return;
  saving.value = true;
  try {
    await updateEoiAdminFields({
      collectionName: COLLECTION,
      id: selected.value.id,
      patch,
    });

    const idx = items.value.findIndex((x) => x.id === selected.value.id);
    if (idx !== -1) {
      items.value[idx] = { ...items.value[idx], ...patch };
      selected.value = items.value[idx];
    }
  } finally {
    saving.value = false;
  }
}

loadFirst();
</script>

<template>
  <PageShell
    title="Student EOIs"
    subtitle="Review student interest submissions and track progress."
  >
    <EoiTable
      title="Student expressions of interest"
      :items="items"
      :loading="loading"
      :canNext="canNext()"
      :canPrev="canPrev()"
      @select="openDrawer"
      @next="nextPage"
      @prev="prevPage"
      @refresh="loadFirst"
    />

    <EoiDetailDrawer
      :open="drawerOpen"
      title="Student EOI"
      :item="selected"
      :saving="saving"
      @close="drawerOpen = false"
      @save="saveDrawer"
    />
  </PageShell>
</template>
