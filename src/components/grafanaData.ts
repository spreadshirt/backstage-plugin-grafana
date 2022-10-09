/*
 * Copyright 2021 Kévin Gomez <contact@kevingomez.fr>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from '@backstage/catalog-model';

export const GRAFANA_ANNOTATION_TAG_SELECTOR = 'grafana/tag-selector';
export const GRAFANA_ANNOTATION_ALERT_LABEL_SELECTOR = 'grafana/alert-label-selector';

export const isDashboardSelectorAvailable = (entity: Entity) => Boolean(entity?.metadata.annotations?.[GRAFANA_ANNOTATION_TAG_SELECTOR]);
export const isAlertSelectorAvailable = (entity: Entity) => Boolean(entity?.metadata.annotations?.[GRAFANA_ANNOTATION_ALERT_LABEL_SELECTOR]);

export const tagSelectorFromEntity = (entity: Entity) => entity?.metadata.annotations?.[GRAFANA_ANNOTATION_TAG_SELECTOR] ?? '';
export const alertSelectorFromEntity = (entity: Entity) => entity?.metadata.annotations?.[GRAFANA_ANNOTATION_ALERT_LABEL_SELECTOR] ?? '';